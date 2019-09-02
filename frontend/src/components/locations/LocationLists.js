import React, { Component } from 'react';
import IosCar from 'react-ionicons/lib/IosCar';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchLocations } from '../../store/locations/actions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const locationListTitle = {
    marginTop: '20px',
    textAlign: 'center'
}

class LocationLists extends Component {

    componentDidMount() {
        this.props.fetchLocations();
    }


    render() {
        console.log(this.props.locations);
        const locationsData = this.props.locations.map(location => {
                return <tr key={location.location_id}>
                        <td><Link to={`/locations/${location.location_id}`}>{location.location_id}</Link></td>
                        <td><Link to={`/locations/${location.location_id}`}>{location.name}</Link></td>
                        <td><Link to={`/locations/${location.location_id}`}>{location.address}</Link></td>
                    </tr>
        })

        return (
            <div>
                <h1 style={locationListTitle}>
                    <IosCar fontSize="40px" color="black" />
                        List of all Car's Location
                    <IosCar fontSize="40px" color="black" />
                </h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Location Id</th>
                            <th>Name</th>
                            <th>Adress</th>
                        </tr>
                    </thead>
                    <tbody>
                          {locationsData}
                    </tbody>
                </Table>

            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    // debugger;
    return {
        locations: state.locations.locations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLocations: () => {
            dispatch(
                fetchLocations()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationLists);