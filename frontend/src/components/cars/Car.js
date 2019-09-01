import React from 'react'
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const CardGroupStyle = {
    width: '400px',
    height: '400px',
    margin: '15px'
}

const imgStyle = {
    width: '400px',
    height: '250px'
};

const buttonCardStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}
  
const Car = (props) => {
    return (
        <Card style={CardGroupStyle}>
            <CardImg top width="100%" style={imgStyle} src={props.photo_url} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.make}{' '}{props.model}</CardTitle>
                <CardSubtitle>Year: {props.year}</CardSubtitle>
                <div style={buttonCardStyle}>
                    <Link to='/locations/:locations_id'>Check Location</Link>
                    <Link to={`/cars/${props.car_id}`}>See Full Details</Link>
                </div>
            </CardBody>
        </Card>
    )
}

export default Car;
