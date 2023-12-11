import {createParkingList} from "./parking-list.js";
import {createBookingForm} from "./booking-form.js";
import {sortNew} from "./sort-by.js";
import {addBooking} from "./new-booking.js";
import {getBooking, getParking} from "./mock-data.js";

const sortSelected = document.getElementById("sortForm");
const dateBtn = document.getElementById("checkDate");
const bookForm = document.getElementById("bookingForm");
let bookingList = getBooking();
let parkingArray = getParking();

dateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const dateInput = document.getElementById("bookingDate").value;

    if (dateInput) {
        createParkingList(dateInput, bookingList, parkingArray);
        createBookingForm(dateInput, bookingList, parkingArray);
    } else {
        alert("Bitte ein Datum auswählen !")
    }
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const date = document.getElementById("bookingDate").value;
    const spot = document.getElementById("bookingSelect").value;

    bookingList = addBooking(date, spot, bookingList);

    createParkingList(date, bookingList, parkingArray);
    createBookingForm(date, bookingList, parkingArray);
});

sortSelected.addEventListener("submit", (e) => {
    e.preventDefault();

    const selected = sortSelected.querySelector(`input[name="sorting"]:checked`).getAttribute("id");
    const dateInput = document.getElementById("bookingDate").value;

    parkingArray = sortNew(selected, parkingArray, dateInput, bookingList);

    createParkingList(dateInput, bookingList, parkingArray);
    createBookingForm(dateInput, bookingList, parkingArray);
});
