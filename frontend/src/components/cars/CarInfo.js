import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneCar } from '../../store/cars/actions'
import { withRouter } from "react-router";
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

class CarInfo extends Component {

    componentDidMount() {
        console.log(this.props);

        // got data through match.params(history)
        this.props.fetchOneCar(this.props.match.params.car_id);
    }
    render() {
        const { photo_url, model, year, make, vin, miles, price, location } = this.props.car;

        return (
            <div>
                <Card >
                    <CardImg top width="100%" src={photo_url} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{make}{' '}{model}</CardTitle>
                        <CardSubtitle>Year: {year}</CardSubtitle>
                        <CardSubtitle>Vin: {vin}</CardSubtitle>
                        <CardSubtitle>Miles: {miles}</CardSubtitle>
                        <CardSubtitle>Price: {price}</CardSubtitle>
                        { location &&
                            <div>
                                <CardSubtitle>Location: {location.address}</CardSubtitle>
                                <CardSubtitle>Dealership: {location.name}</CardSubtitle>
                            </div>
                        }
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    debugger;
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