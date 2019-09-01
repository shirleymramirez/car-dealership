import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IosTrash from 'react-ionicons/lib/IosTrash';
import { deleteACar } from '../../store/cars/actions'
import { connect } from 'react-redux';
import { withRouter } from "react-router";

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

const deleteButton = {
    backgroundColor: 'white',
    border: 'none'
}
  
class Car extends Component {

    deleteACar = e => {
        e.preventDefault()
        debugger;
        this.props.deleteACar(this.props.car_id)
    }

    render() {
        return (
            <Card style={CardGroupStyle}>
                <CardImg top width="100%" style={imgStyle} src={this.props.photo_url} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.props.make}{' '}{this.props.model}</CardTitle>
                    <CardSubtitle>Year: {this.props.year}</CardSubtitle>
                    <div style={buttonCardStyle}>
                        <Link to='/locations/:locations_id'>Check Location</Link>
                        <Link to={`/cars/${this.props.car_id}`}>See Full Details</Link>
                        <Button style={deleteButton} onClick={this.deleteACar}>
                            <IosTrash fontSize="20px" color="red" />
                        </Button>
                    </div>
                </CardBody>
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteACar: (car_id) => {
            dispatch(
                deleteACar(car_id)
            );
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Car));
