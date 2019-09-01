import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCars } from '../../store/cars/actions'
import Car from './Car';

const mainContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '70px',
    marginTop: '40px'
}

class CarLists extends Component {

    componentDidMount() {
        this.props.fetchCars();
    }

    render() {
        return (
            <div style={mainContainer}>
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