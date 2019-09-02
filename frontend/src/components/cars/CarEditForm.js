import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import IosFlower from 'react-ionicons/lib/IosFlower';
import { connect } from 'react-redux';
import { editACar } from '../../store/cars/actions';
import { withRouter } from "react-router";
import IosCar from 'react-ionicons/lib/IosCar';

const title = {
    marginTop: '20px',
    textAlign: 'center'
}

const mainContainer = {
    width: '50%',
    margin: 'auto',
    padding: '20px',
    marginTop: '40px',
    backgroundColor: '#F5F6F6'
}

const formStyles = {
    margin: 'auto'
}

class CarEditForm extends Component {
    state = {
        vin: "",
        year: "",
        make: "",
        model: "",
        miles: "",
        price: "",
        photo_url: "",
        location_id: "",
        editing: false
    }

    componentDidMount() {
        // got data through match.params(history)
        this.props.editACar(this.props.match.params.car_id, this.state);
    }

    userEditing = () => {
        this.setState({
            editing: true
        })
    }

    userDoneEditing = () => {
        this.setState({
            editing: false
        })
        this.props.editACar(this.props.props.car_id, this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        this.props.editACar(this.props.car_id, this.state)
        this.setState({
            vin: "",
            year: "",
            make: "",
            model: "",
            miles: "",
            price: "",
            photo_url: "",
            location_id: ""
        })
    }

    render() {
        return (
            <div>
                <h1 style={title}>
                    <IosCar fontSize="40px" color="black" />
                        Edit Car Information
                    <IosCar fontSize="40px" color="black" /></h1>
                    <div style={mainContainer}>
                    <li onClick={this.userEditing}>  
                        {this.state.editing && 
                        <Form style={formStyles} onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="vin" sm={3}>Vin{' '}<IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="vin"
                                        placeholder="Enter Vin Number"
                                        value={this.state.vin}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="year" sm={3}> Year<IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="year"
                                        placeholder="Enter Year Manufactured"
                                        value={this.state.year}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="make" sm={3}>Make <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="make"
                                        placeholder="Enter Manufacturer"
                                        value={this.state.make}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="model" sm={3}>Model <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="model"
                                        placeholder="Enter Model"
                                        value={this.state.model}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="miles" sm={3}>Miles <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="miles"
                                        placeholder="Enter Mileage"
                                        value={this.state.miles}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={3}>Price <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="price"
                                        placeholder="Enter Price"
                                        value={this.state.price}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="photo_url" sm={3}>Photo Url <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="photo_url"
                                        placeholder="Enter Picture Link"
                                        value={this.state.photo_url}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="location_id" sm={3}>Location ID <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="number"
                                        name="location_id"
                                        placeholder="Enter Location Id"
                                        value={this.state.location_id}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form> 
                        }
                    </li>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        car: state.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editACar: (car_id, data) => {
            dispatch(
                editACar(car_id, data)
            )
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarEditForm));
