import {ParkingSpot} from "./parking-spot.js";
import {Booking} from "./booking.js";

const parkingMocks = [
    new ParkingSpot(1, "wide", "close"),
    new ParkingSpot(2, "wide", "close"),
    new ParkingSpot(3, "regular", "far"),
    new ParkingSpot(4, "regular", "far"),
    new ParkingSpot(5, "wide", "far")
];

export function getParking() {
    return parkingMocks.slice();
}

const bookingMocks = [
    new Booking(1, "2023-12-09", 2),
    new Booking(2, "2023-12-15", 1)
];

export function getBooking() {
    return bookingMocks.slice();
}