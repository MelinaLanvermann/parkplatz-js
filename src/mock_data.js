import {Parkingspot} from "./parkingspot.js";
import {Booking} from "./booking.js";

export const parkingMocks = [
    new Parkingspot(1, "free", "wide", "close"),
    new Parkingspot(2, "free", "wide", "close"),
    new Parkingspot(3, "free", "regular", "far"),
    new Parkingspot(4, "free", "regular", "far"),
    new Parkingspot(5, "", "wide", "far")
];

export const bookingMocks = [
    new Booking(1, "2023-12-09", 2),
    new Booking(2, "2023-12-15", 1)
];