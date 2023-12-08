import {Parkingspot} from "./parkingspot.js";
import {Booking} from "./booking.js";

export const parkingMocks = [
    new Parkingspot(1, "wide", "close"),
    new Parkingspot(2, "wide", "close"),
    new Parkingspot(3, "regular", "far"),
    new Parkingspot(4, "regular", "far"),
    new Parkingspot(5, "wide", "far")
];// remove status

const bookingMocks = [
    new Booking(1, "2023-12-09", 2),
    new Booking(2, "2023-12-15", 1)
];

export function getBooking(){
    return bookingMocks.slice();
}