import React from 'react'
import { ListItem } from './Navbar.styled'

type Props = {
    menu: boolean,
    label: string,
    url: string,
}

const NavItem = ({ menu, label, url }: Props) => {
    return (
        <ListItem menu={menu} >
            <a href={url} title={label}>{label}</a>
        </ListItem>
    )
}

export default NavItem;