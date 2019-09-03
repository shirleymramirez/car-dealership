import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneCar } from '../../store/cars/actions';
import { withRouter } from "react-router";
import { CardImg, Container, Row, Col } from 'reactstrap';
import IosPin from 'react-ionicons/lib/IosPin';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const mainContainer = {
    marginTop: '100px',
    backgroundColor: '#F5F6F6',
    padding: '20px',
    boxShadow: '8px 8px 3px grey',
}

const locationStyle = {
    width: 'auto',
    height: 'auto',
    margin: 'auto',
    marginTop: '35px'
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
        const { photo_url, model, year, make, vin, miles, price, location, location_id } = this.props.car;
        let dollarAmount = parseInt(price).toFixed(2);

    return (
        <Container style={mainContainer}>
            <Row>
                <Col xs="4" sm="4">
                    <CardImg  top width="100%" src={photo_url} alt="Card image cap" />
                </Col>
                <Col xs="4" sm="4">
                    <div style={labelModel}>{make}{' '}{model}</div>
                    <div style={label}>Year: {year}</div>
                    <div style={label}>Vin: {vin}</div>
                    <div style={label}>Miles: {miles}</div>
                    <div style={label}>Price: ${dollarAmount}</div>
                </Col> 
                <Col xs="4" sm="4">
                    <div style={locationStyle}>
                        {location &&
                            <div>
                                <div style={label}>
                                    <IosPin fontSize="20px" color="blue" />
                                        <Link to={`/locations/${location_id}`}>
                                            {location.address}
                                        </Link>
                                </div>
                                <div style={label}>Dealership: {location.name}</div>
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