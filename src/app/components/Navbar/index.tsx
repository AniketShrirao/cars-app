import React from 'react'
import { navItems } from '../../data/homepage/navItems';
import Logo from '../Logo';
import { LogoContainer, NavbarContainer } from './Navbar.styled';
import NavItems from './NavItems';

type Props = {}

const Navbar = (props: Props) => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavItems navigation_links={navItems} />
        </NavbarContainer>
    )
}

export default Navbar