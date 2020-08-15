/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Col, Input, Button, FormFeedback} from 'reactstrap';
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
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnumber: false,
                email: false
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked:target.value;
        
        this.setState({
            [name]: value
        });
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched:{...this.state.touched, [field]:true}
        });
    }

    validate(firstname, lastname, telnumber, email){
        const errors = {
            firstname: '',
            lastname: '',
            telnumber: '',
            email: ''
        }
        if(this.state.touched.firstname && firstname.length < 3){
            errors.firstname = 'First Name should of >= 3 length';
        }
        else if (this.state.touched.firstname && firstname > 10){
            errors.firstname = 'First Name should of <= 10 length';
        }
        if(this.state.touched.lastname && lastname.length < 3){
            errors.lastname = 'Last Name should of >= 3 length';
        }
        else if (this.state.touched.lastname && lastname > 10){
            errors.lastname = 'Last Name should of <= 10 length';
        }
        const regTel = /^\+{1}(998){1}[\d]{9}$/;
        if(this.state.touched.telnumber && !regTel.test(telnumber)){
            errors.telnumber = 'Tel Number should be in the format of +998XXXXXXXXX';
        }
        const regEmail = /^\w+(@){1}\w+(\.)\w{2,5}$/;
        if(this.state.touched.email && !regEmail.test(email)){
            errors.email = 'Please type in correct email address';
        }

        return errors;
    }

    handleSubmit(event){
        console.log('The current state is: ' + JSON.stringify(this.state));
        alert('The current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnumber, this.state.email);
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
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange}
                                    name='firstname' id='firstname' value={this.state.firstname} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastname' 
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={this.handleBlur('lastname')}
                                    onChange={this.handleInputChange}
                                    placeholder='Last Name' name='lastname' value={this.state.lastname} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='contactTel' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='tel' id='contactTel' 
                                    valid={errors.telnumber === ''}
                                    invalid={errors.telnumber !== ''}
                                    onBlur={this.handleBlur('telnumber')}
                                    onChange={this.handleInputChange}
                                    name='telnumber' placeholder='Contact Number' value={this.state.telnumber} />
                                    <FormFeedback>{errors.telnumber}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email' 
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleBlur('email')}
                                    onChange={this.handleInputChange}
                                    name='email' placeholder='Email' value={this.state.email} />
                                    <FormFeedback>{errors.email}</FormFeedback>
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