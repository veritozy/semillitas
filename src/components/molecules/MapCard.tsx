import { Flex, Heading } from "@aws-amplify/ui-react";

const MapCard = ({title, src, ...props} : {title: string, src: string}) => {
    return (
        <Flex
            {...props}
            direction="column"
            padding="medium"
            gap="medium"
        >
            <Heading level={5}>{title}</Heading>
            <iframe
                src={src}
                width="100%"
                height="100%"
                title={title}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </Flex>
    )
}

export default MapCard;