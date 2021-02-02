import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavItem, NavbarToggler, Collapse,
         Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event){
        this.toggleModal();
        alert('Username:' + this.username.value + '\nPassword:' + this.password.value + '\nRememberMe:' + this.remember.checked);
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className='container'>
                        <NavbarBrand href='/' className='mr-auto'>
                            <img src='./assets/images/logo.png' height='30px' width='41px' alt='Ristorante Con Fusion' />
                        </NavbarBrand>
                        <NavbarToggler className='ml-auto' onClick={this.toggleNav} />
                        <Collapse  isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className='fa fa-home fa-lg'></span>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutUs'>
                                        <span className='fa fa-info fa-lg'></span>About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'>
                                        <span className='fa fa-list fa-lg'></span>Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactUs'>
                                        <span className='fa fa-address-card fa-lg'></span>Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><i className='fa fa-sign-in fa-lg'></i>Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type='text' id='username' name='username' placeholder='Username' 
                                innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Username</Label>
                                <Input type='password' id='password' name='password' placeholder='Password' 
                                innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type='checkbox' name='remember' innerRef={(input) => this.remember = input}/>
                                Remember me
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Button type='submit' color='primary'>Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;