import React from 'react'
import { ListContainer, menuStyles } from './Navbar.styled';
import NavItem from './NavItem';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';


interface NavLink {
    id: number;
    label: string;
    url: string;
}

interface Props {
    navigation_links: NavLink[];
}

const NavItems = ({ navigation_links }: Props) => {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    if (isMobile) {
        return (
            <Menu right styles={menuStyles}>
                <ListContainer>
                    {
                        navigation_links.map((nav_link: { id: number; label: string; url: string; }) => (
                            <NavItem menu={true} key={nav_link.id} label={nav_link.label} url={nav_link.url} />
                        ))
                    }
                </ListContainer>
            </Menu>
        )
    }
    return (
        <ListContainer>
            {
                navigation_links.map((nav_link: { id: number; label: string; url: string; }) => (
                    <NavItem menu={false} key={nav_link.id} label={nav_link.label} url={nav_link.url} />
                ))
            }
        </ListContainer>
    )
}

export default NavItems;