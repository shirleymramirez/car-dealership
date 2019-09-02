import React, { useState } from 'react'
import IosCar from 'react-ionicons/lib/IosCar';
import IosAddCircleOutline from 'react-ionicons/lib/IosAddCircleOutline';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap'


function TopNav() {
    const [isOpen, setIsOpen] = useState(false)
    
    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">
                    <IosCar fontSize="40px" color="white" />
                    {' '}Car Inventory</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <Link to="/cars/new">
                            <IosAddCircleOutline fontSize="40px" color="white" />
                        </Link>
                        {/* <NavItem>
                            <NavLink href="/users/login">Login</NavLink>
                        </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    )
}

export default TopNav
