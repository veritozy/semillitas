import { Breadcrumbs, Button, Flex, Link, StepperField, Text } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import {
    createAmplifyAuthAdapter,
    createStorageBrowser,
    StorageBrowserValue,
    CreateStorageBrowserInput,
    defaultActionConfigs,
} from '@aws-amplify/ui-react-storage/browser';
import { useParams } from 'react-router-dom';
import React from 'react';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ActionHandler } from '@aws-amplify/ui-react-storage/browser';
Amplify.configure(outputs);

type GenerateLink = ActionHandler<
    { duration: number; fileKey: string },
    { link: string }
>;

const generateUrlHandler: GenerateLink = ({ data, config, options }) => {
    const handleGenerateUrl = async () => {
        try {
            const s3 = new S3({
                region: config.region,
                credentials: (await config.credentials()).credentials,
            });
            const command = new GetObjectCommand({
                Bucket: config.bucket,
                Key: data.key,
            });
            const url = await getSignedUrl(s3, command, {
                expiresIn: data.duration * 60,
            });
            const result = {
                status: 'COMPLETE' as const,
                value: { link: url },
            };
            return result;
        } catch (error) {
            const message = 'Unable to generate link';
            return {
                status: 'FAILED' as const,
                message,
                error,
            };
        }
    };

    return { result: handleGenerateUrl() };
};

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

const { StorageBrowser, useView, useAction } = createStorageBrowser({
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
                handler: (file) => {
                    const output = defaultActionConfigs.delete.handler(file);
                    console.log('Custom delete handler called for file:', file);
                    return output;
                }
            }
        },
        custom: {
            generateUrl: {
                actionListItem: {
                    icon: 'download',
                    label: 'Generate Download Links',
                    disable: (selected) => !selected?.length,
                },
                handler: generateUrlHandler,
                viewName: 'GenerateUrlView',
            },
        },
    },
    options: {

    },
    components,
});

const GenerateUrlView = () => {
    const [duration, setDuration] = React.useState(60);

    const { onActionExit, fileDataItems } = useView('LocationDetail');

    const items = React.useMemo(
        () =>
            !fileDataItems
                ? []
                : fileDataItems.map((item) => ({ ...item, duration })),
        [fileDataItems, duration]
    );

    const [
        // Execution status and result of each task. The status includes  'CANCELED', 'FAILED', 'COMPLETE', 'OVERWRITE_PREVENTED', 'QUEUED', 'PENDING'.
        { tasks },
        // Start executing the action against the provided `items`.
    ] = useAction(
        // Name of the action.
        'generateUrl',
        // List of action inputs.
        { items }
    );

    return (
        <Flex direction="column">
            <Button onClick={onActionExit}>Exit</Button>
            <StepperField
                label="Duration"
                step={15}
                value={duration}
                min={15}
                max={300}
                onStepChange={setDuration}
            />
            <Button onClick={() => console.log("iniciando")}>Start</Button>
            {!tasks
                ? null
                : tasks.map(({ data, status, value }) => {
                    return (
                        <Flex direction="row" key={data.fileKey}>
                            <Text>{data.fileKey}</Text>
                            {value?.link ? <Link href={value.link}>link</Link> : null}
                            <Text>{status}</Text>
                        </Flex>
                    );
                })}
        </Flex>
    );
};

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
            views={{ GenerateUrlView }}
        />
    );
}