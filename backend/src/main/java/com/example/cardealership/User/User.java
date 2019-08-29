package com.example.cardealership.User;

import com.example.cardealership.Car.Car;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private long car_id;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Car.class)
    @JoinColumn(name = "car_id", insertable = false, updatable = false)
    private Car car;

    public Car getCar() {
        return this.car;
    }

    public void setCar(Car car) {
        this.car = car;
    }
}
