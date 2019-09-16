import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IosTrash from 'react-ionicons/lib/IosTrash';
import { deleteACar } from '../../store/cars/actions'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import IosOpen from 'react-ionicons/lib/IosOpen'

const CardGroupStyle = {
    height: 'auto',
    margin: '15px'
}

const imgStyle = {
    width: '400px',
    height: '250px'
};

const buttonCardStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

const deleteButton = {
    backgroundColor: 'white',
    border: 'none'
}

const modalStyle = {
    textAlign: 'center'
}

const modalFooterStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}
  
class Car extends Component {
    state = {
        fireRedirect: false,
        modal: false
    }

    deleteACar = e => {
        e.preventDefault()
        this.props.deleteACar(this.props.car_id)
        this.setState({
            fireRedirect: true
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    render() {
        const { photo_url, model, make, year, car_id, vin, miles, price} = this.props;
        return (
            <Card style={CardGroupStyle}>
                <CardImg top width="100%" style={imgStyle} src={photo_url} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{make}{' '}{model}</CardTitle>
                    <CardSubtitle>Year: {year}</CardSubtitle>
                    <div style={buttonCardStyle}>
                        <Link to={`/cars/${car_id}`}>See Full Details</Link>
                        <Button style={deleteButton} onClick={this.toggle}>
                            <IosTrash fontSize="20px" color="red" />
                        </Button>

                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={modalStyle}>
                            <ModalHeader toggle={this.toggle}>Are you sure you want to delete this car?</ModalHeader>
                            <ModalBody>
                                <CardImg top width="100%" style={imgStyle} src={photo_url} alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle>Year: {year}</CardSubtitle>
                                        <CardSubtitle>Vin: {vin}</CardSubtitle>
                                        <CardSubtitle>Model: {model}</CardSubtitle>
                                    <CardSubtitle>Miles: {miles}</CardSubtitle>
                                    <CardSubtitle>Price: ${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</CardSubtitle>
                                    </CardBody>
                            </ModalBody>
                            <ModalFooter style={modalFooterStyle}>
                                <Button color="danger" onClick={this.deleteACar}>Delete</Button>{' '}
                                <Button color="primary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                            {/* {this.state.fireRedirect && this.props.history.push("/cars")} */}
                        </Modal>

                        <Link to={`/cars/edit/${car_id}`}>
                            <IosOpen fontSize="20px" color="blue" />
                        </Link>
                    </div>
                </CardBody>
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteACar: (car_id) => {
            dispatch(
                deleteACar(car_id)
            );
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Car));
