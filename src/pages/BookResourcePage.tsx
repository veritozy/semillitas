import { Breadcrumbs } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import {
    createAmplifyAuthAdapter,
    createStorageBrowser,
    StorageBrowserValue,
    CreateStorageBrowserInput,
} from '@aws-amplify/ui-react-storage/browser';
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
}

const { StorageBrowser } = createStorageBrowser({
    config: createAmplifyAuthAdapter(),
    components,
});

export default function BookResourcePage() {
    const defaultValue: StorageBrowserValue = {
        location: {
            bucket: outputs.storage.bucket_name,
            prefix: 'recursos/',
            permissions: ['get', 'list'],
            path: 'religion_1234/',
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