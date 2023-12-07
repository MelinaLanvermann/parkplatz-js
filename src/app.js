import {createParkingList} from "./parking-list.js";
import {createBookingForm} from "./booking-form.js";
import {sortNew} from "./sort-by.js";
import {Dateat} from "./compare-arrays.js";
import {addBooking} from "./newBooking.js";

// createBookingForm();

const sortSelected = document.getElementById("sortForm");
const dateBtn = document.getElementById("checkDate");
const bookForm = document.getElementById("bookingForm");

sortSelected.addEventListener("submit", (e) => {
    e.preventDefault();

    const selected = sortSelected.querySelector(`input[name="sorting"]:checked`).getAttribute("id");
    sortNew(selected);
});

dateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const dateInput = document.getElementById("bookingDate").value;

    if (dateInput) {
        // createParkingList();
        Dateat(dateInput);
    } else {
        alert("Bitte ein Datum auswählen !")
    }
});

bookForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const date = document.getElementById("bookingDate").value;
   const spot = document.getElementById("bookingSelect").value;

   console.log(spot);

   addBooking(date, spot);
});