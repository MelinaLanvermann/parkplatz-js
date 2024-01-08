import {getBookingMockCopy, getParkingMockCopy} from "./mock-data.js";
import {renderBookedList, renderChooseDate} from "./start-dom-elements-render.js";
import {renderBookingForm} from "./booking-form-render.js";
import {renderParkingList} from "./parking-list-render.js";
import {addBooking} from "./booking-changes.js";


let bookingList = getBookingMockCopy();
let parkingArray = getParkingMockCopy();
let bookingsCounter = bookingList.length;
// TODO implement instance handler?

generateStartDOM(bookingList);

export function generateStartDOM(bookingList) {
    document.querySelector('main').remove();

    const startMain = document.createElement("main");
    startMain.setAttribute("class", "main-container");
    startMain.setAttribute("id", "start-page-main");

    const chooseDateForm = renderChooseDate();
    startMain.appendChild(chooseDateForm);

    const bookedListForm = renderBookedList(bookingList);
    startMain.appendChild(bookedListForm);

    document.body.appendChild(startMain);

    chooseDateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selectedDate = document.getElementById("check-date").value;

         if(isDateValid(selectedDate)){
             generateBookingDOM(selectedDate, bookingList, parkingArray);
         }else{
             alert("Ungültiges Datum. Bitte ein Datum in der Zukunft auswählen.\n(Bitte bedenken Sie dass für heute keine Buchungen mehr getätigt werden können)")
         }

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

        if(isDateValid(date)){
            bookingList = addBooking(date, spot, bookingList, bookingsCounter);
            bookingsCounter++;
            generateStartDOM(bookingList);
        }else {
            alert("Ungültiges Datum. Bitte ein Datum in der Zukunft wählen.\n(Bitte bedenken Sie dass für heute keine Buchungen mehr getätigt werden können)");
        }
    })

}

export function isDateValid(dateStr) {
    if(!isNaN(new Date(dateStr))){
        const currentDate = new Date();
        const selectedDate = new Date(dateStr);
        return (currentDate < selectedDate);
    }else{
        return false;
    }
}