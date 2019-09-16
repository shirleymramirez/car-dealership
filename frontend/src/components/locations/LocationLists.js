import React, { Component } from 'react';
import IosCar from 'react-ionicons/lib/IosCar';
import { Table, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchLocations } from '../../store/locations/actions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IosAddCircleOutline from 'react-ionicons/lib/IosAddCircleOutline';
import { deleteALocation } from '../../store/locations/actions';
import { withRouter } from "react-router";
import IosTrash from 'react-ionicons/lib/IosTrash';
import IosOpen from 'react-ionicons/lib/IosOpen'

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

const deleteButton = {
    backgroundColor: 'white',
    border: 'none'
}

class LocationLists extends Component {

    componentDidMount() {
        this.props.fetchLocations();
    }

    deleteALoc = e => {
        e.preventDefault()
        debugger;
        this.props.deleteALocation(this.props.location.location_id)
    }

    render() {
        // console.log(this.props.locations);
        const locationsData = this.props.locations.map(location => {
                return <tr key={location.location_id}>
                        {/* <td><Link to={`/locations/${location.location_id}`}>{location.location_id}</Link></td> */}
                        <td><Link to={`/locations/${location.location_id}`}>{location.name}</Link></td>
                        <td><Link to={`/locations/${location.location_id}`}>{location.address}</Link></td>
                        <td>
                            <Button style={deleteButton} onClick={this.deleteALoc}>
                                <IosTrash fontSize="20px" color="red" />
                            </Button>
                        </td>
                        <td>
                            <Link to={`/locations/edit/${location.location_id}`}>
                                <IosOpen fontSize="20px" color="blue" />
                            </Link>
                        </td>
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
                                {/* <th>LOCATION ID</th> */}
                                <th>NAME</th>
                                <th>ADDRESS</th>
                                <th></th>
                                <th></th>
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
        },
        deleteALocation: (location_id) => {
            debugger;
            dispatch(
                deleteALocation(location_id)
            )
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationLists));