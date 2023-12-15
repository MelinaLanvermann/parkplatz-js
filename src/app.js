import {getBooking, getParking} from "./mock-data.js";
import {createBookingList, createChooseDate} from "./booking-list.js";
import {createBookingForm} from "./booking-form.js";
import {createParkingList} from "./parking-list.js";
import {addBooking, changeBooking, deleteBooking} from "./booking-changes.js";
import {bookingEdit} from "./booking-edit.js";

let bookingList = getBooking();
let parkingArray = getParking();

generateStartDOM(bookingList);

function generateStartDOM(bookingList) {
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

    createBookingList(bookingList);
    createChooseDate();

    chooseDateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selectedDate = document.getElementById("check-date").value;

        generateBookingDOM(selectedDate, bookingList, parkingArray);
    })

    bookingsListForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const selected = Number(bookingsListForm.querySelector(`input[name="booking-item"]:checked`).value);

        generateBookingEditDOM(selected, bookingList);
    })
}

function generateBookingDOM(selectedDate, bookingList, parkingArray) {
    document.querySelector('main').remove();

    const bookingMain = document.createElement("main");
    bookingMain.setAttribute("id", "booking-page-main");

    const bookingForm = document.createElement("form");
    bookingForm.setAttribute("id", "booking-form");

    bookingMain.appendChild(bookingForm);

    document.body.appendChild(bookingMain);

    createBookingForm(selectedDate, bookingList, parkingArray);
    createParkingList(selectedDate, bookingList, parkingArray);

    const updateBtn = document.getElementById("update-booking");

    updateBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const changedDate = document.getElementById("booking-date").value;

        generateBookingDOM(changedDate, bookingList, parkingArray);
    })

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const date = document.getElementById("booking-date").value;
        const spot = Number(document.getElementById("booking-select").value);

        bookingList = addBooking(date, spot, bookingList);

        generateStartDOM(bookingList);
    })

}

function generateBookingEditDOM(selectedBooking, bookingList) {
    document.querySelector('main').remove();

    const bookingEditMain = document.createElement("main");
    bookingEditMain.setAttribute("id", "booking-edit-page-main");

    const editForm = document.createElement("form");
    editForm.setAttribute("id", "edit-form");

    bookingEditMain.appendChild(editForm);

    document.body.appendChild(bookingEditMain);

    bookingEdit(selectedBooking, bookingList, parkingArray);

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById("edit-submit");
        const deleteBtn = document.getElementById("delete-submit");

        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const newDate = document.getElementById("edit-date").value;
            const newSpot = Number(document.getElementById("edit-spot").value);

            bookingList = changeBooking(selectedBooking, newDate, newSpot, bookingList);
            generateStartDOM(bookingList);
        })

        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault();

            bookingList = deleteBooking(selectedBooking, bookingList);
            generateStartDOM(bookingList);
        })
    })
}