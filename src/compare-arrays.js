// import {parkingMocks} from "./mock-data.js";
// import {bookingMocks} from "./mock-data.js";
// import {createParkingList} from "./parking-list.js";
// import {createBookingForm} from "./booking-form.js";
//
//
// export function atDate(dateInput) {
//     const bookingList = bookingMocks;
//
//     for (const booking of bookingList) {
//         if (booking.date === dateInput) {
//             // parkingMocks[+booking.parkId - 1].status = "booked";
//             createParkingList();
//             createBookingForm();
//             break;
//         } else {
//             for (const spot of parkingMocks) {
//                 if (spot.status === "") {
//                     break;
//                 } else {
//                     spot.status = "free";
//                 }
//             }
//             createParkingList();
//             createBookingForm();
//         }
//     }
//     console.log(bookingList, bookingMocks);
//     createParkingList();
//     createBookingForm();
// }