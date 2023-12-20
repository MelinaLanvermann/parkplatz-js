import {getBookingMockCopy, getParkingMockCopy} from "./mock-data.js";
import {renderBookingsList, renderChooseDate} from "./booking-list.js";
import {renderBookingForm} from "./booking-form.js";
import {renderParkingList} from "./parking-list.js";
import {addBooking} from "./booking-changes.js";


let bookingList = getBookingMockCopy();
let parkingArray = getParkingMockCopy();

generateStartDOM(bookingList);

export function generateStartDOM(bookingList) {
    document.querySelector('main').remove();

    const startMain = document.createElement("main");
    startMain.setAttribute("class", "main-container");
    startMain.setAttribute("id", "start-page-main");

    const chooseDateForm = renderChooseDate();
    startMain.appendChild(chooseDateForm);

    const bookingsListForm = renderBookingsList(bookingList);
    startMain.appendChild(bookingsListForm);

    document.body.appendChild(startMain);

    chooseDateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selectedDate = document.getElementById("check-date").value;

        generateBookingDOM(selectedDate, bookingList, parkingArray);
    })

}

export function generateBookingDOM(selectedDate, bookingList, parkingArray) {
    document.querySelector('main').remove();

    const bookingMain = document.createElement("main");
    bookingMain.setAttribute("class", "main-container");
    bookingMain.setAttribute("id", "booking-page-main");

    const bookingForm = renderBookingForm(selectedDate, bookingList, parkingArray);
    bookingMain.appendChild(bookingForm);

    const parkingListDiv = renderParkingList(selectedDate, bookingList, parkingArray);
    bookingMain.appendChild(parkingListDiv);

    document.body.appendChild(bookingMain);

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const date = document.getElementById("booking-date").value;
        const spot = Number(document.getElementById("booking-select").value);

        bookingList = addBooking(date, spot, bookingList);

        generateStartDOM(bookingList);
    })

}