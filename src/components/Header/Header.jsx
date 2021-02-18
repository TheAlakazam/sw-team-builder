import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link, useLocation} from 'react-router-dom';
import routes from '../../app/routes.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {pathname} = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='dark' dark expand='md'>
      <NavbarToggler onClick={toggle} className="mx-2"/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {routes.map(({title, path}) => (
            <NavItem key={title} active={path === pathname}>
              <NavLink tag={Link} to={path}>{title}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
