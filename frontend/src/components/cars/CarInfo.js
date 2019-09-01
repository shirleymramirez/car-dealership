import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneCar, editACar } from '../../store/cars/actions';
import { withRouter } from "react-router";
import { CardImg, Container, Row, Col } from 'reactstrap';
import IosPin from 'react-ionicons/lib/IosPin';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const mainContainer = {
    marginTop: '100px',
    backgroundColor: '#F5F6F6'
}

const ImageStyle = {
    width: '400px',
    height: '300px',
    marginTop: '70px'
}

const CarInfoStyle = {
    width: '400px',
    height: '300px',
    margin: '70px'
}

const locationStyle = {
    width: '400px',
    height: '300px',
    marginTop: '70px'
}

const labelModel = {
    fontWeight: "bold",
    fontSize: '30px'
}

const label = {
    padding: '10px'
}


class CarInfo extends Component {

    componentDidMount() {
        // got data through match.params(history)
        this.props.fetchOneCar(this.props.match.params.car_id);
    }
    render() {
        const { photo_url, model, year, make, vin, miles, price, location } = this.props.car;

    return (
        <Container style={mainContainer}>
            <Row>
                <Col xs="4" sm="4">
                    <CardImg style={ImageStyle} top width="100%" src={photo_url} alt="Card image cap" />
                </Col>
                <Col xs="4" sm="4">
                    <div style={CarInfoStyle}>
                        <div style={labelModel}>{make}{' '}{model}</div>
                        <div style={label}>Year: {year}</div>
                        <div style={label}>Vin: {vin}</div>
                        <div style={label}>Miles: {miles}</div>
                        <div style={label}>Price: {price}</div>
                    </div>
                </Col> 
                <Col xs="4" sm="4">
                    <div style={locationStyle}>
                        {location &&
                            <div>
                                <div style={label}>
                                    <IosPin fontSize="20px" color="black" />
                                    {location.address}
                                </div>
                                <div style={label}>Dealership: {location.name}</div>
                                <Link to={`/cars/edit/${this.props.match.params.car_id}`}>Edit Info</Link>
                            </div>
                        }
                    </div>
                </Col> 
            </Row>
        </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        car: state.cars.car
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOneCar: (car_id) => {
            dispatch(
                fetchOneCar(car_id)
            );
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarInfo));