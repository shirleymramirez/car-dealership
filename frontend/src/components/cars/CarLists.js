import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCars } from '../../store/cars/actions'
import Car from './Car';

class CarLists extends Component {

    componentDidMount() {
        this.props.fetchCars();
    }

    render() {
        return (
            <div>
                {Object.values(this.props.cars.cars).map(car => {
                    return (
                        <Car key={car.car_id} {...car}/>
                    )
                })}
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