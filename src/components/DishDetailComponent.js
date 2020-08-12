import React from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
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

const DishDetail = (props) => {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='col-12'>
                    <h2>Dish Detail</h2>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish={props.dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h3>Comments</h3>
                    <ul className='list-unstyled'>
                        <RenderComments comments={props.comments} />
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default DishDetail;