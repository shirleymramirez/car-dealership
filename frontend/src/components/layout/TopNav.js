import React, { useState } from 'react'
import IosCar from 'react-ionicons/lib/IosCar';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap'


function TopNav() {
    const [isOpen, setIsOpen] = useState(false)
    
    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">
                    <IosCar shake={true} fontSize="40px" color="white" />
                    {' '}Car Inventory</NavbarBrand>
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
