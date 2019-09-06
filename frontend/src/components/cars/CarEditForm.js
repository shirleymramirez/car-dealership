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
        vin: this.props.car.car_id,
        year: this.props.car.year,
        make: this.props.car.make,
        model: this.props.car.model,
        miles: this.props.car.miles,
        price: this.props.car.price,
        photo_url: this.props.car.photo_url,
        location_id: this.props.location_id,
        editing: false,
        car:[]
    }

    componentDidMount() {
        this.props.editACar(this.props.match.params.car_id, this.props);
    }

    handleChange = e => {
        this.setState({
            editACar: !this.state.editing,
            [e.target.name]: e.target.value
        })
    }

    // handleChange = e => {
    //     e.preventDefault();
    //     const newBody = e.target.value;
    //     const myName = e.target.name;

    //     // debugger;
    //     this.setState(prevState => {
    //         return {
    //             car: prevState.car.map(car => {
    //                 if (car.editing) {
    //                     return {
    //                         ...car,
    //                         [myName]: newBody
    //                     }
    //                 } else {
    //                     return { ...car }
    //                 }
    //             })
    //         }
    //     })
    // }

    handleSubmit = e => {
        e.preventDefault()
        this.props.editACar(this.props.car_id, this.props)
    }

    render() {
        const carItems = this.props.car.filter(item => {
            return item.car_id == this.props.match.params.car_id
        });
    
        console.log(carItems[0].vin);


        return (
            <div>
                <h1 style={title}>
                    <IosCar fontSize="40px" color="black" />
                        Edit Car Information
                    <IosCar fontSize="40px" color="black" /></h1>
                    <div style={mainContainer}>
                        <Form style={formStyles} onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="vin" sm={3}>Vin{' '}<IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="vin"
                                        placeholder="Enter Vin Number"
                                        value={carItems[0].vin}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing} required />
                                         {/* : <>{this.state.vin}</> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="year" sm={3}> Year<IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="year"
                                        placeholder="Enter Year Manufactured"
                                        value={carItems[0].year}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing} required /> 
                                        {/* : <>{this.state.year}</> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="make" sm={3}>Make <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="make"
                                        placeholder="Enter Manufacturer"
                                        value={carItems[0].make}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing} required /> 
                                        {/* : <>{this.state.make}</> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="model" sm={3}>Model <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="model"
                                        placeholder="Enter Model"
                                        value={carItems[0].model}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing} required />
                                         {/* : <>{this.state.model}</> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="miles" sm={3}>Miles <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="miles"
                                        placeholder="Enter Mileage"
                                        value={carItems[0].miles}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing} required />
                                         {/* : <>{this.state.photo_url}</> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={3}>Price <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="price"
                                        placeholder="Enter Price"
                                        value={carItems[0].price}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing} required />
                                         {/* : <>{this.state.price}</> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="photo_url" sm={3}>Photo Url <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="photo_url"
                                        placeholder="Enter Picture Link"
                                        value={carItems[0].photo_url}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing} required/> 
                                        {/* : <>{this.state.photo_url}</> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="location_id" sm={3}>Location ID <IosFlower fontSize="6px" color="red" /></Label>
                                <Col sm={8}>
                                    <Input
                                        type="number"
                                        name="location_id"
                                        placeholder="Enter Location Id"
                                        value={carItems[0].location_id}
                                        onChange={this.handleChange}
                                        onBlur={this.userDoneEditing} required />
                                         {/* : <>{this.state.location_id}</> */}
                                </Col>
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.cars.cars);
    return {
        car: state.cars.cars
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
