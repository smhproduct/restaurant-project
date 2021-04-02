import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggle = () => {
        this.setState(
            {
                isNavOpen: !this.state.isNavOpen
            }
        )
    }
    render() {
        return (
            <div>
                <Navbar dark color='dark' expand='sm'>
                    <div className='container'>
                        <NavbarBrand href='/'>Bohubrihi Restaurant</NavbarBrand>
                        <NavbarToggler onClick={this.navToggle} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='mr-auto' navbar>
                                <NavItem className='nav-item'>
                                    <Link to='/' className='nav-link active'>Home</Link>
                                </NavItem>
                                <NavItem className='nav-item'>
                                    <Link to='/menu' className='nav-link active'>Menu</Link>
                                </NavItem>
                                <NavItem className='nav-item'>
                                    <Link to='/about' className='nav-link active'>About</Link>
                                </NavItem>
                                <NavItem className='nav-item'>
                                    <Link to='/contact' className='nav-link active'>Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
            </div>
        );
    }

}

export default Navigation;