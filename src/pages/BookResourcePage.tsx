import { Breadcrumbs } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import {
    createAmplifyAuthAdapter,
    createStorageBrowser,
    StorageBrowserValue,
    CreateStorageBrowserInput,
    defaultActionConfigs,
    defaultHandlers,
} from '@aws-amplify/ui-react-storage/browser';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
Amplify.configure(outputs);

const components: CreateStorageBrowserInput['components'] = {
    Navigation: ({ items }) => (
        <Breadcrumbs.Container>
            {items.map(({ isCurrent, name, onNavigate }, index) => (
                index > 1 &&
                <>
                    <Breadcrumbs.Item key={name}>
                        <Breadcrumbs.Link isCurrent={isCurrent} onClick={onNavigate}>
                            {index === 2 && "🏠"} {name}
                        </Breadcrumbs.Link>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Separator />
                </>
            ))}
        </Breadcrumbs.Container>
    ),
    // DataTable: (props) => (
    //         <table
    //             {...props}
    //             style={{
    //                 width: '100%',
    //                 borderCollapse: 'collapse',
    //             }}
    //         />
    //     ),
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomAudioRenderer = ({ fileData, url }: any) => (
    <div
        style={{
            border: '3px solid #6f42c1',
            padding: '15px',
            borderRadius: '8px',
            width: '100%',
        }}
    >
        <h3>Audio {fileData?.key.split('/')[fileData?.key.split('/').length - 1]}</h3>
        <audio controls style={{ width: '100%' }}>
            <source src={url} />
            Your browser does not support the audio element.
        </audio>
    </div>
);

const { StorageBrowser } = createStorageBrowser({
    config: createAmplifyAuthAdapter(),
    filePreview: {
        fileTypeResolver: (properties) => {
            if (properties.key.endsWith('txt')) return 'text';
            if (properties.key.endsWith('mp4')) return 'video';
            if (properties.key.endsWith('jpg')) return 'image';

            if (properties?.contentType?.startsWith('audio/')) return 'audio';

            return undefined;
        },
        rendererResolver: (fileType: string) => {
            if (fileType === "audio") return CustomAudioRenderer;
            return undefined;
        },
    },
    actions: {
        default: {
            delete: {
                ...defaultActionConfigs.delete,
                handler: (input) => {
                    const output = defaultHandlers.delete(input);
                    output.result.then((result) => {
                        console.log('Recurso eliminado:', result);
                    });
                    return output;
                }
            }

        }
    },
    options: {

    },
    components,
});

export default function BookResourcePage() {
    const { loading: authLoading, isAdmin } = useAuth();
    const { bookId } = useParams();
    const defaultValue: StorageBrowserValue = {
        location: {
            bucket: outputs.storage.bucket_name,
            prefix: 'recursos/',
            permissions: isAdmin ? ['get', 'list', 'write', 'delete'] : ['get', 'list'],
            path: `${bookId}/`,
        },
    };

    if (authLoading) return <p>Cargando...</p>;

    return (
        <StorageBrowser
            displayText={{
                LocationsView: {
                    title: 'Recursos Disponibles',
                    tableColumnActionsHeader: 'Acciones',
                    tableColumnPermissionsHeader: 'Permisos',
                    tableColumnFolderHeader: 'Carpeta',
                    searchPlaceholder: 'Buscar carpeta por nombre',
                    tableColumnBucketHeader: 'Bucket',
                },
                LocationDetailView: {
                    getTitle: (location) => "Recursos en " + (location?.path || 'raíz'),
                    getActionListItemLabel: (action) => {
                        if (action === 'Upload') return 'Subir';
                        if (action === 'Create folder') return 'Crear Carpeta';
                        if (action === 'Copy') return 'Copiar';
                        if (action === 'Download') return 'Descargar';
                        if (action === 'Delete') return 'Eliminar';
                        return action + "";
                    },
                    tableColumnNameHeader: 'Nombre del recurso',
                    tableColumnSizeHeader: 'Tamaño del recurso',
                    tableColumnLastModifiedHeader: 'Última modificación',
                    tableColumnTypeHeader: 'Tipo de recurso',
                    searchPlaceholder: 'Buscar recurso por nombre',
                    searchSubfoldersToggleLabel: 'Buscar en subcarpetas',
                    filePreview: {
                        filePreviewTitle: 'Vista previa del recurso',
                        closeButtonLabel: 'Cerrar vista previa',
                        fileInformationTitle: 'Información del recurso',
                        filePrefix: 'Recurso: ',
                        unsupportedFileDescription: 'Vista previa no disponible para este tipo de recurso.',
                        unsupportedFileMessage: 'Intenta descargar el recurso para verlo.',
                        downloadButtonLabel: 'Descargar recurso',
                    }
                },
                UploadView: {
                    title: 'Subir Recursos',
                    addFilesLabel: 'Agregar Archivos',
                    addFolderLabel: 'Agregar Carpeta',
                    actionCancelLabel: 'Cancelar',
                    actionDestinationLabel: 'Destino',
                    actionExitLabel: 'Salir',
                    actionStartLabel: 'Iniciar Subida',
                    getActionCompleteMessage: (data) => {
                        return { content: `${data?.counts?.COMPLETE} archivos subidos con éxito.` };
                    },
                    tableColumnCancelHeader: 'Cancelar',
                    tableColumnNameHeader: 'Nombre del recurso',
                    tableColumnSizeHeader: 'Tamaño del recurso',
                    tableColumnProgressHeader: 'Progreso',
                    tableColumnStatusHeader: 'Estado',
                    tableColumnTypeHeader: 'Tipo de recurso',
                    statusDisplayCanceledLabel: 'Cancelado',
                    statusDisplayCompletedLabel: 'Completado',
                    statusDisplayFailedLabel: 'Fallido',
                    statusDisplayInProgressLabel: 'En progreso',
                    statusDisplayOverwritePreventedLabel: 'Sobrescritura prevenida',
                    statusDisplayQueuedLabel: 'En cola',
                    statusDisplayTotalLabel: 'Total',
                    tableColumnFolderHeader: 'Carpeta',
                    overwriteToggleLabel: 'Sobrescribir archivos existentes',
                },
                CopyView: {
                    title: 'Copiar Recursos',
                    actionCancelLabel: 'Cancelar',
                    actionDestinationLabel: 'Destino',
                    actionExitLabel: 'Salir',
                    actionStartLabel: 'Iniciar Copia',
                    getActionCompleteMessage: (data) => {
                        return { content: `${data?.counts?.COMPLETE} archivos copiados con éxito.` };
                    },
                    tableColumnNameHeader: 'Nombre del recurso',
                    tableColumnSizeHeader: 'Tamaño del recurso',
                    tableColumnTypeHeader: 'Tipo de recurso',
                    tableColumnStatusHeader: 'Estado',
                    statusDisplayCanceledLabel: 'Cancelado',
                    statusDisplayCompletedLabel: 'Completado',
                    statusDisplayFailedLabel: 'Fallido',
                    statusDisplayInProgressLabel: 'En progreso',
                    statusDisplayTotalLabel: 'Total',
                    tableColumnFolderHeader: 'Carpeta',
                },
                CreateFolderView: {
                    title: 'Crear Nueva Carpeta',
                    actionCancelLabel: 'Cancelar',
                    actionDestinationLabel: 'Destino',
                    actionExitLabel: 'Salir',
                    actionStartLabel: 'Crear Carpeta',
                    folderNameLabel: 'Nombre de la Carpeta',
                    getActionCompleteMessage: () => {
                        return { content: `Carpeta creada con éxito.` };
                    },
                    folderNamePlaceholder: 'Ingresa el nombre de la carpeta',
                },
                DownloadView: {
                    title: 'Descargar Recursos',
                    actionCancelLabel: 'Cancelar',
                    actionDestinationLabel: 'Destino',
                    actionExitLabel: 'Salir',
                    actionStartLabel: 'Iniciar Descarga',
                    getActionCompleteMessage: (data) => {
                        return { content: `${data?.counts?.COMPLETE} archivos descargados con éxito.` };
                    },
                    tableColumnNameHeader: 'Nombre del recurso',
                    tableColumnSizeHeader: 'Tamaño del recurso',
                    tableColumnTypeHeader: 'Tipo de recurso',
                    tableColumnStatusHeader: 'Estado',
                    statusDisplayCanceledLabel: 'Cancelado',
                    statusDisplayCompletedLabel: 'Completado',
                    statusDisplayFailedLabel: 'Fallido',
                    statusDisplayInProgressLabel: 'En progreso',
                    statusDisplayTotalLabel: 'Total',
                    tableColumnFolderHeader: 'Carpeta',
                },
                DeleteView: {
                    title: 'Eliminar Recursos',
                    actionCancelLabel: 'Cancelar',
                    actionDestinationLabel: 'Destino',
                    actionExitLabel: 'Salir',
                    actionStartLabel: 'Iniciar Eliminación',
                    getActionCompleteMessage: (data) => {
                        return { content: `${data?.counts?.COMPLETE} archivos eliminados con éxito.` };
                    },
                    tableColumnNameHeader: 'Nombre del recurso',
                    tableColumnSizeHeader: 'Tamaño del recurso',
                    tableColumnTypeHeader: 'Tipo de recurso',
                    tableColumnStatusHeader: 'Estado',
                    statusDisplayCanceledLabel: 'Cancelado',
                    statusDisplayCompletedLabel: 'Completado',
                    statusDisplayFailedLabel: 'Fallido',
                    statusDisplayInProgressLabel: 'En progreso',
                    statusDisplayTotalLabel: 'Total',
                    tableColumnFolderHeader: 'Carpeta',
                },
            }}
            defaultValue={defaultValue}
        />
    );
}