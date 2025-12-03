import {
    Flex,
    // useTheme,
    // Authenticator,
    // useAuthenticator,
    Image,
    // Icon,
} from '@aws-amplify/ui-react';
import NavigationBar from '../molecules/NavigationBar';
// import { signOut } from '@aws-amplify/auth';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// import { BiSolidUserCircle as IconUser } from "react-icons/bi";

const AppBar = ({ logo, pages }:
    {
        logo: string,
        pages: { title: string, path: string, submenu?: { title: string, path: string }[], hiddenOnAppBar?: boolean }[],
    }) => {
    const navigate = useNavigate();
    // const { authStatus } = useAuthenticator(context => [context.authStatus]);
    // const [showAuth, setShowAuth] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 1224 });
    const isBigScreen = useMediaQuery({ minWidth: 1824 });
    const screenType = isBigScreen ? 'bigScreen' : isDesktop ? 'desktop' : 'mobile';
    // const { tokens } = useTheme();

    // const handleSignInClick = () => {
    //     setShowAuth(true);
    // };
    // async function handleSignOut() {
    //     try {
    //         await signOut();
    //         setShowAuth(false);
    //     } catch (error) {
    //         console.log('error signing out: ', error);
    //     }
    // }

    return (
        <Flex
            position="relative"
            direction="row"
            alignItems="stretch"
            justifyContent="space-between"
            wrap="nowrap"
            gap="large"
            padding="small"
            width="100%"
        >
            <Flex alignItems="center" gap="large">
                <Image height="40px" alt="Logo Semillitas" src={logo} onClick={() => navigate("/")} />
                <NavigationBar pages={pages} screenType={screenType} />
                {/* {
                    showAuth && (
                        <Authenticator variation="modal" />
                    )
                } */}

            </Flex>
            <Flex alignItems="center" gap="large">
                {/* <Icon
                    onClick={authStatus === 'authenticated' ? handleSignOut : handleSignInClick}
                    style={{ cursor: 'pointer' }}
                    as={IconUser}
                    ariaLabel="User Icon"
                    height="40px"
                    color={authStatus === 'authenticated' ? tokens.colors.green[50] : tokens.colors.blue[60]}
                /> */}
            </Flex>
        </Flex>
    );
}

export default AppBar;