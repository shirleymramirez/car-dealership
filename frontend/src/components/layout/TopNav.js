import React, { useState } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'


function TopNav() {
    const [isOpen, setIsOpen] = useState(false)
    
    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Car Inventory</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/users/login">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    )
}

export default TopNav
