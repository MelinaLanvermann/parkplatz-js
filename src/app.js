import {createParkingList} from "./parking-list.js";
import {createBookingForm} from "./booking-form.js";
import {sortNew} from "./sort-by.js";
import {addBooking} from "./new-booking.js";
import {getBooking, getParking} from "./mock-data.js";
import {createBookingList} from "./booking-list.js";

const sortSelected = document.getElementById("sort-form");
const dateBtn = document.getElementById("check-date");
const bookForm = document.getElementById("booking-form");
let bookingList = getBooking();
let parkingArray = getParking();

dateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const dateInput = document.getElementById("booking-date").value;

    if (dateInput) {
        createParkingList(dateInput, bookingList, parkingArray);
        createBookingForm(dateInput, bookingList, parkingArray);
    } else {
        alert("Bitte ein Datum auswählen !")
    }
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const date = document.getElementById("booking-date").value;
    const spot = document.getElementById("booking-select").value;

    bookingList = addBooking(date, spot, bookingList);

    createParkingList(date, bookingList, parkingArray);
    createBookingForm(date, bookingList, parkingArray);
    createBookingList();
});



sortSelected.addEventListener("submit", (e) => {
    e.preventDefault();

    const selected = sortSelected.querySelector(`input[name="sorting"]:checked`).getAttribute("id");
    const dateInput = document.getElementById("booking-date").value;

    parkingArray = sortNew(selected, parkingArray, dateInput, bookingList);

    createParkingList(dateInput, bookingList, parkingArray);
    createBookingForm(dateInput, bookingList, parkingArray);
});
