import {createParkingList} from "./parking-list.js";
// import {createBookingList} from "./booking-form.js";
import {sortNew} from "./sort-by.js";

document.body.onload = createParkingList;
// createBookingList();

const sortSelected = document.getElementById("sortForm");

sortSelected.addEventListener("submit", (e) => {
    e.preventDefault();

    const selected = sortSelected.querySelector(`input[name="sorting"]:checked`).getAttribute("id");
    sortNew(selected);
});