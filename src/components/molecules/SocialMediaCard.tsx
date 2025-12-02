import { Flex, Heading, Link, Icon } from "@aws-amplify/ui-react";
import {
    MdOutlineMail as Mail,
    MdPhone as Phone,
} from "react-icons/md";
import { IconType } from "react-icons";

const SocialMediaCard = (
    { title, email, phone, socialMediaLinks }:
        { title: string, email: string, phone: string, socialMediaLinks: { icon: IconType, link: string }[] }) => {
    return (
        <Flex
            direction="column"
            padding="medium"
            gap="medium"
        >
            <Heading level={5}>{title}</Heading>
            <Flex
                alignItems="center"
                gap="small"
                alignContent="center"
                justifyContent="center"
            >
                <Icon as={Mail} ariaLabel="mail" height="40px" />
                <Link href={"mailto:" + email}>{email}</Link>
            </Flex>
            <Flex
                alignItems="center"
                gap="small"
                alignContent="center"
                justifyContent="center"
            >
                <Icon as={Phone} ariaLabel="phone" height="40px" />&nbsp;
                <Link href={"tel:" + phone} target="_blank">
                    {`${phone.slice(0, 4)}-0${phone.slice(4, 6)}-${phone.slice(6, 10)}-${phone.slice(10)}`}
                </Link>
            </Flex>
            <Flex
                alignItems="center"
                gap="medium"
                alignContent="center"
                justifyContent="center"
            >
                {
                    socialMediaLinks.map(({ icon, link }, index) => (
                        <Link key={index} href={link} target="_blank" rel="noopener noreferrer">
                            <Icon as={icon} ariaLabel="social-media" height="40px" />
                        </Link>
                    ))
                }
            </Flex>
        </Flex>
    );
}

export default SocialMediaCard;