import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCars } from '../../store/cars/actions'
import Car from './Car';
import IosCar from 'react-ionicons/lib/IosCar';

const title = {
    marginTop: '20px',
    textAlign: 'center'
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
            <div>
                <h1 style={title}>
                    <IosCar fontSize="40px" color="black" />
                    List of Cars
                    <IosCar fontSize="40px" color="black" />
                    </h1>
                    <div style={mainContainer}>
                    {Object.values(this.props.cars.cars).map(car => {
                            return (
                                <Car key={car.car_id} {...car}/>
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
        cars: state.cars
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