import { useLocation, useNavigate } from "react-router-dom";
import {
    Breadcrumbs,
    Menu,
    MenuItem,
    MenuButton,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const NavigationBar = ({ pages, screenType }:
    {
        pages: { title: string, path: string, submenu?: { title: string, path: string }[], hiddenOnAppBar?: boolean }[],
        screenType?: 'mobile' | 'desktop' | 'bigScreen'
    }) => {

    const location = useLocation();
    const navigate = useNavigate();

    function isCurrentPath(path: string) {
        return location.pathname.split("/")[1] === path.split("/")[1];
    }

    if (screenType === 'desktop' || screenType === 'bigScreen') {
        return (
            <Breadcrumbs.Container position="relative">
                {pages.filter(page => !page.hiddenOnAppBar).map(({ title, path, submenu }, i, pages) => {
                    return (
                        <Breadcrumbs.Item key={path}>
                            {
                                !submenu ?
                                    <Breadcrumbs.Link href={path} isCurrent={isCurrentPath(path)}>
                                        {title}
                                    </Breadcrumbs.Link> :
                                    <Menu
                                        boxShadow="none"
                                        borderWidth="0"
                                        fontSize="1rem"
                                        fontStyle="normal"
                                        fontWeight="normal"
                                        trigger={
                                            <MenuButton
                                                borderWidth="0"
                                                fontSize="1rem"
                                                lineHeight="small"
                                                fontWeight="normal"
                                                color={
                                                    isCurrentPath(path) ?
                                                        "var(--amplify-components-breadcrumbs-link-current-color)" :
                                                        "var(--amplify-components-breadcrumbs-link-color)"
                                                }
                                            >
                                                {title}
                                            </MenuButton>
                                        }
                                    >
                                        {submenu.map(({ title, path }) => {
                                            return (
                                                <MenuItem key={title} onClick={() => navigate(path)}>
                                                    {title}
                                                </MenuItem>
                                            );
                                        })}
                                    </Menu>
                            }
                            {i < pages.length - 1 && <Breadcrumbs.Separator>|</Breadcrumbs.Separator>}
                        </Breadcrumbs.Item>
                    );
                })}
            </Breadcrumbs.Container>
        );
    }

    return (
        <Menu menuAlign="start">
            {pages.filter(page => !page.hiddenOnAppBar).map(({ title, path, submenu }) => {
                return !submenu ? (
                    <MenuItem key={path} onClick={() => navigate(path)} >
                        {title}
                    </MenuItem>
                ) : (
                    <Menu
                        boxShadow="none"
                        borderWidth="0"
                        fontSize="1rem"
                        fontStyle="normal"
                        fontWeight="normal"
                        trigger={
                            <MenuButton
                                borderWidth="0"
                                fontSize="1rem"
                                lineHeight="small"
                                fontWeight="normal"
                                color={
                                    isCurrentPath(path) ?
                                        "var(--amplify-components-breadcrumbs-link-current-color)" :
                                        "var(--amplify-components-breadcrumbs-link-color)"
                                }
                            >
                                {title}
                            </MenuButton>
                        }
                    >
                        {submenu.map(({ title, path }) => {
                            return (
                                <MenuItem key={title} onClick={() => navigate(path)}>
                                    {title}
                                </MenuItem>
                            );
                        })}
                    </Menu>
                );
            })}
        </Menu>
    );
};

export default NavigationBar;

