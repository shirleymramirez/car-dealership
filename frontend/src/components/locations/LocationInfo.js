import React, { Component } from 'react'
import { fetchCarsByLocation } from '../../store/cars/actions'
import { fetchOneLocation } from '../../store/locations/actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Location from './Location';
import IosCar from 'react-ionicons/lib/IosCar';

const dealershipLocationTitle = {
    marginTop: '20px',
    textAlign: 'center'
}

const locationByIdMainContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 'auto',
    width: '100vw',
    marginLeft: '65px'
}

class LocationInfo extends Component {

    componentDidMount() {
        this.props.fetchOneLocation(this.props.match.params.location_id);
        this.props.fetchCarsByLocation(this.props.match.params.location_id);
    }
    render() {
        
        return (
            <div>
                <h1 style={dealershipLocationTitle}>
                    <IosCar beat={true} fontSize="40px" color="black" />
                        Cars in Dealership {this.props.location.name}
                    <IosCar beat={true} fontSize="40px" color="black" />
                </h1>
                <div style={locationByIdMainContainer}>
                    {Object.values(this.props.cars).map(car => {
                        return (
                            <Location key={car.car_id} {...car} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        location: state.locations.location,
        cars: state.cars.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOneLocation: (location_id) => {
            dispatch(
                fetchOneLocation(location_id)
            );
        },
        fetchCarsByLocation: (location_id) => {
            dispatch(
                fetchCarsByLocation(location_id)
            )
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationInfo));