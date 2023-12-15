import {Parkingspot} from "./parkingspot.js";
// import {Booking} from "./booking";

export const parkingMocks = [
    new Parkingspot(1, "free", "wide", "close"),
    new Parkingspot(2, "free", "wide", "close"),
    new Parkingspot(3, "free", "regular", "far"),
    new Parkingspot(4, "booked", "regular", "far"),
    new Parkingspot(5, "", "wide", "far")
];

export const bookingMocks = [];