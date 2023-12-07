import {bookingMocks} from "./mock_data.js";
import {Booking} from "./booking.js";
import {Dateat} from "./compare-arrays.js";


export function addBooking(date, spot) {
    const bookingList = bookingMocks;
    const newDate = date;
    const newSpot = +spot;
    const newBooking = new Booking(bookingList.length + 1, newDate, newSpot)

    for (const booking of bookingList) {
        if (booking.date === newDate && booking.parkId === newSpot) {
            Dateat(newDate)
            break;
        } else {
            createBooking();
            break;
        }
    }
    function createBooking(){
        bookingMocks.push(newBooking);
        console.log(bookingMocks);
        Dateat(newDate);
    }
}
