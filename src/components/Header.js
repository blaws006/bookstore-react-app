import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark sticky='top' expand='md' className=''>
      <NavbarBrand href='/' className=''>
        <h1 className='mt-1'>Book Store App</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse navbar isOpen={menuOpen} className='nav-links'>
        <Nav navbar>
          <NavItem className='px-3'>
            <i className='fa fa-home fa-lg' style={{ color: '#fff' }} /> Home
          </NavItem>
          <NavItem className='px-3'>
            <i className='fa fa-list fa-lg' style={{ color: '#fff' }} />{' '}
            Directory
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
