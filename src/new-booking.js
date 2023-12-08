// import {bookingMocks} from "./mock-data.js";
import {Booking} from "./booking.js";
import {getStatus} from "./parking-status.js";
import {createBookingForm} from "./booking-form.js";
import {createParkingList} from "./parking-list.js";

export function addBooking(date, spot, bookingList) {

    const newDate = date;
    const newSpot = +spot;

    // überprüfe parking === free ?
    const spotStatus = getStatus(newDate, newSpot, bookingList);

    if (spotStatus === "free") {
        const newBooking = new Booking(bookingList.length + 1, newDate, newSpot);
        bookingList.push(newBooking);
        console.log(bookingList, spotStatus);
        createBookingForm(date, bookingList);
        createParkingList(date, bookingList);
    } else {
        alert("ERROR");
    }

}
