import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Label, Col, Button, Row} from 'reactstrap';
import {Form, Control, Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';

const required = (val) => val && val.length;
const onlyLetters = (val) => /^[A-Za-z]{3,}$/.test(val);
const telNumber = (val) => /^(\+998){1}[0-9]{9}$/.test(val);
const isEmail = (val) => /^[a-zA-Z0-9]+(@){1}[a-z]+(\.){1}[a-z]{2,}$/.test(val);
class ContactUs extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log('The current state is: ' + JSON.stringify(values));
        alert('The current state is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

    render(){
        return(
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <Breadcrumb className='mt-3'>
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
                            <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <h2>Send us Your Feedback</h2>
                    <div className='col-12 col-md-9'>
                        <Form model='feedback' onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model='.firstname' className='form-control' placeholder='First Name' 
                                    name='firstname' id='firstname' 
                                    validators={{
                                        required,
                                        onlyLetters
                                    }}/>
                                    <Errors className='text-danger' model='.firstname' show='touched'
                                    messages={{
                                        required: 'This field is required; ', 
                                        onlyLetters: 'This field should consist of only letters and must be in length >=3'
                                    }} />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' className='form-control' id='lastname' 
                                    placeholder='Last Name' name='lastname' 
                                    validators={{
                                        required,
                                        onlyLetters
                                    }}/>
                                    <Errors className='text-danger' model='.lastname' show='touched'
                                    messages={{
                                        required: 'This field is required; ', 
                                        onlyLetters: 'This field should consist of only letters and must be in length >=3'
                                    }} />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='contactTel' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model='.telnumber' className='form-control' id='contactTel' 
                                    name='telnumber' placeholder='Contact Number'
                                    validators={{
                                        required,
                                        telNumber
                                    }}/>
                                    <Errors className='text-danger' model='.telnumber' show='touched'
                                    messages={{
                                        required: 'This field is required; ', 
                                        telNumber: 'It should be in the format of +998XXXXXXXXX'
                                    }} />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model='.email' className='form-control' id='email' 
                                    name='email' placeholder='Email' 
                                    validators={{
                                        required,
                                        isEmail,
                                    }}/>
                                    <Errors className='text-danger' model='.email' show='touched'
                                    messages={{
                                        required: 'This field is required; ', 
                                        isEmail: 'Please enter valid email address!'
                                    }} />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size:6, offset:2}}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model=".agree" className='form-check-input' 
                                                name="agree" />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model='.contactType' className='form-control' name='contactType'>
                                        <option selected={true}>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>                                  
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='feedback' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' className='form-control' id='feedback'
                                    name='message' rows={8} 
                                    validators={{
                                        required
                                    }}/>
                                    <Errors className='text-danger' model='.message' show='touched'
                                    messages={{
                                        required: 'This field is required', 
                                    }} /> 
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size:4, offset:2}}>
                                    <Button type='submit' color='primary'>Send Feedback</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;