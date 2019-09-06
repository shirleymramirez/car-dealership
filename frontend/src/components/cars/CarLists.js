import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCars } from '../../store/cars/actions'
import Car from './Car';
import IosCar from 'react-ionicons/lib/IosCar';
import IosAddCircleOutline from 'react-ionicons/lib/IosAddCircleOutline';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const title = {
    marginTop: '20px',
    textAlign: 'center'
}

const mainListContainer = {
    height: '100vh'
}

const mainContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 'auto',
    width: '100vw',
    marginLeft: '65px'
}

class CarLists extends Component {

    componentDidMount() {
        this.props.fetchCars();
    }

    render() {
        return (
            <div style={mainListContainer}>
                <h1 style={title}>
                    <div>
                        <IosCar beat={true} fontSize="40px" color="black" />
                            List of Cars
                        <IosCar beat={true} fontSize="40px" color="black" />
                        <Link to="/cars/new">
                            <IosAddCircleOutline fontSize="40px" color="black" />
                        </Link>
                    </div>
                </h1>
                    <div style={mainContainer}>
                         {Object.values(this.props.cars).map(car => {
                            return (
                                <div>
                                    <Car key={car.car_id} {...car}/>
                                 </div>   
                            )
                         })}
                    </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    // console.log(state)
    return {
        cars: state.cars.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCars: () => {
            dispatch(
                fetchCars()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarLists)