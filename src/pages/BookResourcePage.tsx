import { Breadcrumbs } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import {
    createAmplifyAuthAdapter,
    createStorageBrowser,
    StorageBrowserValue,
    CreateStorageBrowserInput,
} from '@aws-amplify/ui-react-storage/browser';
import { useParams } from 'react-router-dom';
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

    },
    options: {

    },
    components,
});

export default function BookResourcePage() {
    const { bookId } = useParams();
    const defaultValue: StorageBrowserValue = {
        location: {
            bucket: outputs.storage.bucket_name,
            prefix: 'recursos/',
            permissions: ['get', 'list'],
            path: `${bookId}/`,
        },
    };

    return (
        <StorageBrowser
            displayText={{
                LocationsView: { title: 'Recursos Disponibles' },
                LocationDetailView: {
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
            }}
            defaultValue={defaultValue}
        />
    );
}