import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, Label} from 'reactstrap';
import {Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {LocalForm, Errors, Control} from 'react-redux-form';
import {Link} from 'react-router-dom';

function RenderDish({dish}){
    if (dish != null){
        return(
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function RenderComments({comments}){
    return comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p><span>--{comment.author}</span>, <span>{new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</span></p>
            </li>
        )
    });
}

const minLength = (len) => (val) => val && val.length > len;
const maxLength = (len) => (val) => val && val.length <= len;
class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.toggleModal();
        alert(JSON.stringify(values));
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Button color='secondary' onClick={this.toggleModal}><i className='fa fa-pencil fa-lg'></i> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className='form-group'>
                                <Label htmlFor='rating'>Rating</Label>
                                <Control.select model='.rating' name='rating' id='rating' className='form-control'>
                                    <option selected={true} value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Control.select>
                            </div>
                            <div className='form-group'>
                                <Label htmlFor='name'>Your Name</Label>
                                <Control.text model='.name' id='name' className='form-control' placeholder='Your Name' 
                                validators={{
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                }}
                                />
                                <Errors model='.name' show='touched'
                                wrapper={(props) => <div className="text-danger">{props.children[0]}</div>}
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }} />
                            </div>
                            <div className='form-group'>
                                <Label htmlFor='comment'>Comment</Label>
                                <Control.textarea model='.comment' id='comment' className='form-control' rows={5} />
                            </div>
                            <Button type='submit' color='primary'>Submit</Button> 
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

class DishDetail extends Component {
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className='col-12'>
                        <h2>Dish Detail</h2>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={this.props.dish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h3>Comments</h3>
                        <ul className='list-unstyled'>
                            <RenderComments comments={this.props.comments} />
                        </ul>
                        <CommentForm />
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default DishDetail;