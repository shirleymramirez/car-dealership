import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
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
  
class Car extends Component {
    state = {
        fireRedirect: false
    }

    deleteACar = e => {
        e.preventDefault()
        this.props.deleteACar(this.props.car_id)
        this.setState({
            fireRedirect: true
        })
    }

    render() {
        const { photo_url, model, make, year, car_id } = this.props;
        return (
            <Card style={CardGroupStyle}>
                <CardImg top width="100%" style={imgStyle} src={photo_url} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{make}{' '}{model}</CardTitle>
                    <CardSubtitle>Year: {year}</CardSubtitle>
                    <div style={buttonCardStyle}>
                        <Link to={`/cars/${car_id}`}>See Full Details</Link>
                        <Button style={deleteButton} onClick={this.deleteACar}>
                            <IosTrash fontSize="20px" color="red" />
                        </Button>
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
