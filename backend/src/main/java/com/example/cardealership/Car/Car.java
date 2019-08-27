package com.example.cardealership.Car;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String vin;

    @Column
    private int year;

    @Column
    private String make;

    @Column
    private String model;

    @Column
    private int miles;

    @Column
    private int price;

    @Column
    private String photo_url;

    @Column
    private int location_id;

}
