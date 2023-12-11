import {Booking} from "./booking.js";
import {getStatus} from "./parking-status.js";

export function addBooking(date, spot, bookingList) {

    const newDate = date;
    const newSpot = +spot;
    const bookingCopy = bookingList.slice();

    const spotStatus = getStatus(newDate, newSpot, bookingCopy);
    if (spotStatus === "free") {
        const newBooking = new Booking(bookingList.length + 1, newDate, newSpot);
        bookingCopy.push(newBooking);

    } else {
        // hier könnte ihr throw stehen!
    }
    return bookingCopy;

}
