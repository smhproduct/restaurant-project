import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: '5px' }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
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
                    <LoadComments comments={props.comments} />
                </CardBody>
            </Card>

        </div>
    );
}

export default DishDetail;