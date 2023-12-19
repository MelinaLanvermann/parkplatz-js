import {getBooking, getParking} from "./mock-data.js";
import {renderBookingsList, renderChooseDate} from "./booking-list.js";
import {renderBookingForm} from "./booking-form.js";
import {renderParkingList} from "./parking-list.js";
import {addBooking} from "./booking-changes.js";


let bookingList = getBooking();
let parkingArray = getParking();

generateStartDOM(bookingList);

export function generateStartDOM(bookingList) {
    document.querySelector('main').remove();

    const startMain = document.createElement("main");
    // startMain.setAttribute("id", "start-page-main");
    const chooseDateForm = document.createElement("form");
    const bookingsListForm = document.createElement("form");

    chooseDateForm.setAttribute("id", "choose-date");
    bookingsListForm.setAttribute("id", "bookings-list");

    startMain.appendChild(chooseDateForm);
    startMain.appendChild(bookingsListForm);

    document.body.appendChild(startMain);

    renderBookingsList(bookingList);
    renderChooseDate();

    chooseDateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selectedDate = document.getElementById("check-date").value;

        generateBookingDOM(selectedDate, bookingList, parkingArray);
    })

}

export function generateBookingDOM(selectedDate, bookingList, parkingArray) {
    document.querySelector('main').remove();

    const bookingMain = document.createElement("main");
    bookingMain.setAttribute("id", "booking-page-main");

    const bookingForm = document.createElement("form");
    bookingForm.setAttribute("id", "booking-form");

    bookingMain.appendChild(bookingForm);

    document.body.appendChild(bookingMain);

    renderBookingForm(selectedDate, bookingList, parkingArray);
    renderParkingList(selectedDate, bookingList, parkingArray);

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const date = document.getElementById("booking-date").value;
        const spot = Number(document.getElementById("booking-select").value);

        bookingList = addBooking(date, spot, bookingList);

        generateStartDOM(bookingList);
    })

}