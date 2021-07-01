import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';

const MenuItem = props => {
    // console.log(props);
    return (
        <div>
            <Card style={{ margin: '5px' }}>
                <CardBody onClick={props.onDishSelect} style={{ cursor: 'pointer' }}>
                    <CardImg
                        alt={props.dish.name}
                        src={baseUrl + props.dish.image}
                        style={{ opacity: '0.7' }} />
                    <CardImgOverlay>
                        <CardTitle

                            style={{ cursor: 'pointer' }}
                        >{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;