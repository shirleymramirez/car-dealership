import React, { Component } from 'react';
import IosCar from 'react-ionicons/lib/IosCar';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchLocations } from '../../store/locations/actions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IosAddCircleOutline from 'react-ionicons/lib/IosAddCircleOutline';

const locationListTitle = {
    marginTop: '20px',
    textAlign: 'center'
}

const locationListTable = {
    width: '80vw',
    margin: 'auto',
    border: '1px solid gray',
    borderStyle: 'none',
    textAlign: 'center',
    padding: '10px',
    boxShadow: '8px 8px 3px grey'
}

class LocationLists extends Component {

    componentDidMount() {
        this.props.fetchLocations();
    }

    render() {
        // console.log(this.props.locations);
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
                        Car Dealership
                    <IosCar fontSize="40px" color="black" />
                    <Link to="/locations/new">
                        <IosAddCircleOutline fontSize="40px" color="black" />
                    </Link>
                </h1>
                <div style={locationListTable}>
                    <Table>
                        <thead>
                            <tr>
                                <th>LOCATION ID</th>
                                <th>NAME</th>
                                <th>ADDRESS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locationsData}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
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