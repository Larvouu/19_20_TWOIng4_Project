import React, { Component, useState }  from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../NavBar/NavBar.css';

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div id="navbar">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto" id="nav-title">Dashboard</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink><Link to="/" id="link-1">Accueil</Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink><Link to="/admin" id="link-2">Page Admin</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;