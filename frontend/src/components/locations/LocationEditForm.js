import React, { Component } from 'react';
import IosCar from 'react-ionicons/lib/IosCar';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import IosFlower from 'react-ionicons/lib/IosFlower';
import { connect } from 'react-redux';
import { editALocation } from '../../store/locations/actions';
import { withRouter } from "react-router";


const newLocTitleFormTitle = {
    marginTop: '20px',
    textAlign: 'center'
}

const mainContainer = {
    width: '50%',
    margin: 'auto',
    padding: '20px',
    marginTop: '40px',
    backgroundColor: '#F5F6F6',
    boxShadow: '8px 8px 3px grey'
}

const formStyles = {
    margin: 'auto'
}

class LocationEditForm extends Component {
    state = {
        locationToUpdate: {
            name: this.props.location.name,
            address: this.props.location.address,
        },
        fireRedirect: false
    }

    componentDidMount() {
        this.props.editALocation(this.props.match.params.location_id, this.props);
    }

    handleChange = e => {
        let newLocation = this.state.locationToUpdate;
        newLocation[e.target.name] = e.target.value;
        this.setState(prevState => ({
            ...prevState,
            locationToUpdate: newLocation
        }))
    }


    handleSubmit = e => {
        e.preventDefault()
        this.props.editALocation(this.props.location.location_id, this.state.locationToUpdate)
        this.setState({
            fireRedirect: true,
            address: "",
            name: ""
        })
    }

    render() {
        return (
            <div>
                <h1 style={newLocTitleFormTitle}>
                    <IosCar beat={true} fontSize="40px" color="black" />
                    Edit Location Details
                    <IosCar beat={true} fontSize="40px" color="black" />
                </h1>
                <div style={mainContainer}>
                    <Form style={formStyles} onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="name" sm={3}>Name{' '}<IosFlower fontSize="6px" color="red" /></Label>
                            <Col sm={8}>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Dealership Name"
                                    value={this.state.locationToUpdate.name}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={3}> Address<IosFlower fontSize="6px" color="red" /></Label>
                            <Col sm={8}>
                                <Input
                                    type="text"
                                    name="address"
                                    placeholder="Dealership Address"
                                    value={this.state.locationToUpdate.address}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Col>
                        </FormGroup>
                        <Button type="submit" color="primary">Submit</Button>
                    </Form>
                    {this.state.fireRedirect && this.props.history.push("/locations")}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.locations.locations)
    return {
        location: state.locations.locations[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editALocation: (location_id, data) => {
            dispatch(
                editALocation(location_id, data)
            )
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationEditForm));

