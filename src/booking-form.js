import {getStatus} from "./parking-status.js";

export function createBookingForm(date, bookingList, parkingArray) {

    const bForm = document.getElementById("booking-form");
    const oldSelect = document.querySelector(".current-select");
    const newSelect = document.createElement("select");

    newSelect.setAttribute("id", `booking-select`);
    newSelect.setAttribute("name", `booking-select`);

    for (const spot of parkingArray) {
        const newItem = document.createElement("option");
        const spotStatus = (getStatus(date, spot.id, bookingList))

        if (spotStatus === "free") {
            const newItemText = document.createTextNode(`Parkplatz Nr. ${spot.id}`);
            newItem.appendChild(newItemText);
            newItem.setAttribute("value", `${spot.id}`);
            newSelect.appendChild(newItem);
        }
    }
    newSelect.setAttribute("class", "current-select");
    bForm.replaceChild(newSelect, oldSelect);
}