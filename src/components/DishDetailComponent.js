import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish){
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
    renderComments(comments){
        return comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p><span>--{comment.author}</span><span>{comment.date}</span></p>
                </li>
            )
        });
    }
    render(){
        return(
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.props.dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h3>Comments</h3>
                    <ul className='list-unstyled'>
                        {this.renderComments(this.props.dish.comments)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default DishDetail;