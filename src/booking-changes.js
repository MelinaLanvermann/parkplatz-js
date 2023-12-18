import {Booking} from "./booking.js";
import {isFree} from "./parking-status.js";

export function addBooking(date, spot, bookingList) {

    const newDate = date;
    const newSpot = spot;
    const bookingCopy = bookingList.slice();

    const spotStatus = isFree(newDate, newSpot, bookingCopy);
    if (spotStatus) {
        const newBooking = new Booking(bookingList.length + 1, newDate, newSpot);
        bookingCopy.push(newBooking);

    } else {
        throw new Error('Es ist ein Fehler aufgetreten');
        // return bookingList;
    }
    return bookingCopy;

}