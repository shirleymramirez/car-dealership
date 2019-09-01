package com.example.cardealership.Car;

import com.example.cardealership.Location.Location;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long car_id;

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

    @ManyToOne(targetEntity = Location.class)
    @JoinColumn(name = "location_id", insertable = false, updatable = false)
    private Location location;

    public Location getLocation() {
        return this.location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public int getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getMiles() {
        return miles;
    }

    public void setMiles(int miles) {
        this.miles = miles;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getPhoto_url() {
        return photo_url;
    }

    public void setPhoto_url(String photo_url) {
        this.photo_url = photo_url;
    }

    public int getLocation_id() {
        return location_id;
    }

    public void setLocation_id(int location_id) {
        this.location_id = location_id;
    }
}


