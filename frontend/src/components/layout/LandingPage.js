import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

const jumStyle = {
    height: '100vh'
}

const titlePage = {
    textAlign: 'center',
    marginTop: '100px'
}

const mainContainer = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '100px'
}

const buttonHeaderCars = {
    width: '300px',
    backgroundColor: '#F5AE1F',
    borderRadius: '20px',
    borderStyle: 'none'
}

const buttonHeaderLocation = {
    width: '300px',
    backgroundColor: '#71D8F4',
    borderRadius: '20px',
    borderStyle: 'none',
}

const header6 = {
    paddingTop: '5px'
}

const LandingPage = (props) => {
    return (
        <div>
            <Jumbotron style={jumStyle}>
                <div style={titlePage}>
                    <h2>Get the TruePrice</h2>
                    <h2>— the Actual Price You Will Pay at the Dealership.</h2>
                </div>
                <Container style={mainContainer}>
                    <Row>
                        <Col xs="6">
                            <Link to="/cars">
                                <Button style={buttonHeaderCars}>
                                    <h6 style={header6}>List of All Cars</h6>
                                </Button>
                            </Link>
                        </Col>
                        <Col xs="6">
                            <Link to="/locations">
                                <Button style={buttonHeaderLocation}>
                                    <h6 style={header6}>Location</h6>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default LandingPage;