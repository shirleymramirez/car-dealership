import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { postNewLocation } from '../../store/locations/actions';
import IosCar from 'react-ionicons/lib/IosCar';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import IosFlower from 'react-ionicons/lib/IosFlower';

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

class NewLocation extends Component {
    state = {
        address: "",
        name: "",
        fireRedirect: 'false'
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.postNewLocation(this.state)
        // to clear input field after submission
        this.setState({
            fireRedirect: 'true',
            name: "",
            address: "",
        })
    }

    render() {
        return (
            <div> 
                <h1 style={newLocTitleFormTitle}>
                    <IosCar beat={true} fontSize="40px" color="black" />
                        Add A New Location
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
                                    value={this.state.name}
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
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Col>
                        </FormGroup>
                        <Button type="submit" color="primary">Submit</Button>
                    </Form>
                    {/* {this.state.fireRedirect && this.props.history.push("/locations")} */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        locations: state.locations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postNewLocation: (data) => {
            dispatch(
                postNewLocation(data)
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLocation);

