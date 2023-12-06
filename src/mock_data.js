import {Parkingspot} from "./parkingspot.js";
// import {Booking} from "./booking";

export const parkingMocks = [
    new Parkingspot(1, "free", "wide", "close"),
    new Parkingspot(2, "booked", "wide", "close"),
    new Parkingspot(3, "free", "regular", "far"),
    new Parkingspot(4, "booked", "regular", "far"),
    new Parkingspot(5, "", "wide", "far")
];

export function getParkingMocks() {
    return this.parkingMocks;
}

// export const bookingMocks = [
//     new Booking(1, "22-10-2012", 1),
//     new Booking(2, "23-10-2023", 1)
// ];