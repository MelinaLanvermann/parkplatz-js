import {Booking} from "./booking.js";
import {isFree} from "./parking-attributes.js";

export function addBooking(date, spot, bookingList) {

    const newDate = date;
    const newSpot = spot;
    const bookingCopy = bookingList.slice();

    const spotStatus = isFree(newDate, newSpot, bookingCopy);
    if (spotStatus) {
        const newBooking = new Booking(bookingList.length + 1, newDate, newSpot);
        bookingCopy.push(newBooking);
        //TODO bookingList.length + 1 replace with global counter
    }

    return bookingCopy;

}
