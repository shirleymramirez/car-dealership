# Car Dealership

## Summary

You were tasked to create a car dealership management tool for a used car dealer with multiple locations.

The base goals of this project will create a basic vehicle inventory management tool.

### Index

- [Home](/README.md)
- [Cars Overview](/cars_overview.md)
- [Locations Overview](/locations_overview.md)

### Client Component Tree

- [Click here](https://www.lucidchart.com/invitations/accept/6b87f693-f0fd-451e-8e94-72eef2d629aa)

### Main Features

- Base Goals

  - Show all cars
  - Show single car details
  - Add/Edit car
  - Show all locations
  - Show single location and their inventory
  - Add/Edit location
  
  # Cars Routes

## Client Routes

| Route Name      | Request Method | Example Request URL | Route                |
| --------------- | -------------- | ------------------- | -------------------- |
| cars index      | `GET`          | `/cars`             | `/cars`              |
| single car page | `GET`          | `/cars/1`           | `/cars/:car_id`      |
| cars edit       | `GET`          | `/cars/1/edit`      | `/cars/:car_id/edit` |
| cars new page   | `GET`          | `/cars/new`         | `/cars/new`          |

## Server Routes

| Route Name   | Request Method | Example Request URL | Route           |
| ------------ | -------------- | ------------------- | --------------- |
| all cars     | `GET`          | `/cars`             | `/cars`         |
| cars create  | `POST`         | `/cars`             | `/cars`         |
| cars update  | `PATCH`        | `/cars/1`           | `/cars/:car_id` |
| cars destroy | `DELETE`       | `/cars/1`           | `/cars/:car_id` |

## Cars Table

| Column Name | Data Type |
| ----------- | --------- |
| id          | SERIAL    |
| vin         | STRING    |
| year        | INT       |
| make        | STRING    |
| model       | STRING    |
| miles       | INT       |
| price       | INT       |
| photo_url   | STRING    |
| location_id | INT       |

- For scalability and analytics, you might consider normalizing this data a little more into separate tables, however, it's not required.

## User Stories

- As a user, I can see all of the cars with the year, make, model and the dealerships they are located at.
- As a user, when I click one of cars in the list, I am taken to a page that shows me the full details about that car.
- As a user, when I click the add button, it takes me to a form that allows me to add a car to the list.
- As a user, I am able to remove a car from this list by clicking the delete button next to the car.
- As a user, I can click the edit button to take me to a form that will let me edit the car.

# Location Routes

## Client Location Routes

| Route Name           | Request Method | Example Request URL | Route                          |
| -------------------- | -------------- | ------------------- | ------------------------------ |
| location index       | `GET`          | `/locations`        | `/locations`                   |
| single location page | `GET`          | `/locations/1`      | `/locations/:location_id`      |
| location new page    | `GET`          | `/locations/new`    | `/locations/new`               |
| location edit        | `GET`          | `/locations/1/edit` | `/locations/:location_id/edit` |

## Server Location Routes

| Route Name       | Request Method | Example Request URL | Route                     |
| ---------------- | -------------- | ------------------- | ------------------------- |
| all locations    | `GET`          | `/locations`        | `/locations`              |
| location update  | `PATCH`        | `/locations/1/`     | `/locations/:location_id` |
| location create  | `POST`         | `/locations`        | `/locations`              |
| location destroy | `DELETE`       | `/locations/1`      | `/locations/:location_id` |

## Locations Table

| Column Name | Data Type |
| ----------- | --------- |
| id          | SERIAL    |
| name        | STRING    |
| address     | STRING    |

## User Stories

- As a user, I can see all of the locations with the name.
- As a user, when I click one of location in the list, I am taken to a page that shows me the full details about that location.
- As a user, when I click the add button, it takes me to a form that allows me to add a location to the list.
- As a user, I am able to remove a location from this list by clicking the delete button next to the location.
- As a user, I can click the edit button to take me to a form that will let me edit the location.
