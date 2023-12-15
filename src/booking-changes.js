import {Booking} from "./booking.js";
import {getStatus} from "./parking-status.js";

export function addBooking(date, spot, bookingList) {

    const newDate = date;
    const newSpot = spot;
    const bookingCopy = bookingList.slice();

    const spotStatus = getStatus(newDate, newSpot, bookingCopy);
    if (spotStatus === "free") {
        const newBooking = new Booking(bookingList.length + 1, newDate, newSpot);
        bookingCopy.push(newBooking);

    } else {
        // hier könnte ihr throw stehen!
        alert("Es ist ein Fehler aufgetreten!")
        return bookingList;
    }
    return bookingCopy;

}

export function changeBooking(bookId, newDate, newPark, bookingList) {
    const found = bookingList.find((Booking) => Booking.id === bookId);
    const foundIndex = bookingList.findIndex((Booking) => Booking.id === bookId);
    const bookingCopy = bookingList.slice();

    if (found) {
        if (found.date === newDate && found.parkId === newPark) {
            alert("Sie haben keine Änderung vorgenommen");
            return bookingList;
        }
        found.date = newDate;
        found.parkId = newPark;
        bookingCopy.splice(foundIndex, 1, found);
    }
    return bookingCopy;

}

export function deleteBooking(bookId, bookingList) {
    const found = bookingList.find((Booking) => Booking.id === bookId);
    const foundIndex = Number(bookingList.findIndex((Booking) => Booking.id === bookId));
    const bookingCopy = bookingList.slice();

    if (found) {
        return bookingCopy.splice(foundIndex, 1);
    }
}