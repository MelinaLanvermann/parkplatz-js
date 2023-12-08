import {parkingMocks} from "./mock-data.js";
import {getStatus} from "./parking-status.js";

export function createBookingForm(date, bookingList) {

    const bForm = document.getElementById("bookingForm");
    const oldSelect = document.querySelector(".currentSelect");
    const newSelect = document.createElement("select");

    newSelect.setAttribute("id", `bookingSelect`);
    newSelect.setAttribute("name", `bookingSelect`);

    for (const spot of parkingMocks) {
        const newItem = document.createElement("option");
        const spotStatus = (getStatus(date, spot.id, bookingList))

        if (spotStatus === "free") {
            const newItemText = document.createTextNode(`Parkplatz Nr. ${spot.id}`);
            newItem.appendChild(newItemText);
            newItem.setAttribute("value", `${spot.id}`);
            newSelect.appendChild(newItem);
        }
    }
    newSelect.setAttribute("class", "currentSelect");
    bForm.replaceChild(newSelect, oldSelect);
}