import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import IosTrash from 'react-ionicons/lib/IosTrash';
import IosOpen from 'react-ionicons/lib/IosOpen';

const CardGroupStyle = {
    height: 'auto',
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

const deleteButton = {
    backgroundColor: 'white',
    border: 'none'
}

class Location extends Component {

    deleteACar = e => {
        e.preventDefault()
        debugger;
        this.props.deleteACar(this.props.car_id)
    }

    render() {
        const { photo_url, model, make, year, car_id } = this.props;
        return (
            <div>
                <Card style={CardGroupStyle}>
                    <CardImg top width="100%" style={imgStyle} src={photo_url} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{make}{' '}{model}</CardTitle>
                        <CardSubtitle>Year: {year}</CardSubtitle>
                        <div style={buttonCardStyle}>
                            <Link to={`/cars/${car_id}`}>See Full Details</Link>
                            <Button style={deleteButton} onClick={this.deleteACar}>
                                <IosTrash fontSize="20px" color="red" />
                            </Button>
                            <Link to={`/cars/edit/${car_id}`}>
                                <IosOpen fontSize="20px" color="blue" />
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

    
export default Location;