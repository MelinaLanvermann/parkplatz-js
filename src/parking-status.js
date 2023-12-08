// import {parkingMocks} from "./mock-data.js";
// import {bookingMocks} from "./mock-data.js";

// export function setStatus(date, parkId) {
//
// }

export function getStatus(date, parkId, bookingList) {

    const found = bookingList.find((Booking) => Booking.date === date && Booking.parkId === parkId);

    if (found) {
        return "booked";
    } else {
        return "free";
    }
}