/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Col, Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class ContactUs extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnumber: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked:target.value;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log('The current state is: ' + JSON.stringify(this.state));
        alert('The current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to={'/home'}>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>ContactUs</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className='col-12'>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <h2>Send us Your Feedback</h2>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' placeholder='First Name' 
                                    onChange={this.handleInputChange}
                                    name='firstname' id='firstname' value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastname' 
                                    onChange={this.handleInputChange}
                                    placeholder='Last Name' name='lastname' value={this.state.lastname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='contactTel' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='tel' id='contactTel' 
                                    onChange={this.handleInputChange}
                                    name='telnumber' placeholder='Contact Number' value={this.state.telnumber} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email' 
                                    onChange={this.handleInputChange}
                                    name='email' placeholder='Email' value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                onChange={this.handleInputChange}
                                                checked={this.state.agree} />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type='select' name='contactType' onChange={this.handleInputChange} 
                                    value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>                                  
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='feedback' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='feedback'
                                    onChange={this.handleInputChange}
                                    name='message' value={this.state.message} rows={8} /> 
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:4, offset:2}}>
                                    <Button type='submit' color='primary'>Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;