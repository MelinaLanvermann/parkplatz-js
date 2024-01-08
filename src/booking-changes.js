import {Booking} from "./booking.js";
import {isFree} from "./parking-attributes.js";

export function addBooking(date, spot, bookingList, bookingsCounter) {

    const newDate = date;
    const newSpot = spot;
    const bookingCopy = bookingList.slice();

    const spotStatus = isFree(newDate, newSpot, bookingCopy);
    if (spotStatus) {
        const newBooking = new Booking(bookingsCounter+1, newDate, newSpot);
        bookingCopy.push(newBooking);
    }

    return bookingCopy;

}
