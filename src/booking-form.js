import {parkingMocks} from "./mock_data.js";

export function createBookingForm() {

    const bForm = document.getElementById("bookingForm");
    const oldSelect = document.querySelector(".currentSelect");
    const newSelect = document.createElement("select");

    newSelect.setAttribute("id", `bookingSelect`);
    newSelect.setAttribute("name", `bookingSelect`);

    for (const spot of parkingMocks) {
        const newItem = document.createElement("option");

        if (spot.status === "free") {
            const newItemText = document.createTextNode(`Parkplatz Nr. ${spot.id}`);
            newItem.appendChild(newItemText);
            newItem.setAttribute("value", `${spot.id}`);
            newSelect.appendChild(newItem);
        }
    }
    bForm.replaceChild(newSelect, oldSelect);
    newSelect.setAttribute("class", "currentSelect");
}