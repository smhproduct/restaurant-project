import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';
import { baseUrl } from '../../redux/baseUrl';


const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: '5px' }}>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Tk {props.dish.price}/-
                    </CardText>
                    <hr />
                    <h4 style={{ marginBottom: '20px' }}>Comments:</h4>
                    <LoadComments comments={props.comments} commentIsLoading={props.commentIsLoading} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>

        </div>
    );
}

export default DishDetail;