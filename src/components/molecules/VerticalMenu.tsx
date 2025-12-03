import { Flex, Heading, Collection, Link } from "@aws-amplify/ui-react";

const VerticalMenu = ({ title, pages }: { title: string, pages: { title: string, path: string }[] }) => {
    return (
        <Flex
            
            direction="column"
            padding="medium"
            gap="small"
        >
            <Heading level={5}>
                {title}
            </Heading>
            <Collection
                items={pages}
                type="list"
                gap="0.25rem"
                direction="column"
            >
                {page => <Link href={page.path}>{page.title}</Link>}
            </Collection>
        </Flex>
    )
}

export default VerticalMenu;