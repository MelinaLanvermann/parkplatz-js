import {isFree} from "./parking-status.js";
import {generateBookingDOM} from "./app.js";

export function renderBookingForm(date, bookingList, parkingArray) {

    const bookingForm = document.getElementById("booking-form");
    bookingForm.setAttribute("action", "");
    bookingForm.setAttribute("target", "_self");
    bookingForm.setAttribute("method", "post");
    bookingForm.setAttribute("name", "booking-form");

    const dateLabel = document.createElement("label");
    const dateLabelText = document.createTextNode("Wunschdatum : ");
    dateLabel.appendChild(dateLabelText);
    dateLabel.setAttribute("for", "booking-date");
    bookingForm.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "booking-date");
    dateInput.setAttribute("value", `${date}`);
    dateInput.setAttribute("required", "");
    bookingForm.appendChild(dateInput)

    const updateBtn = document.createElement("button");
    const updateBtnText = document.createTextNode("Datum prüfen");
    updateBtn.appendChild(updateBtnText);
    updateBtn.setAttribute("id", "update-booking");
    bookingForm.appendChild(updateBtn);

    updateBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const changedDate = document.getElementById("booking-date").value;

        generateBookingDOM(changedDate, bookingList, parkingArray);
    })

    const selectLabel = document.createElement("label");
    const selectLabelText = document.createTextNode("Parkplatz : ")
    selectLabel.appendChild(selectLabelText);
    selectLabel.setAttribute("for", "booking-select");
    bookingForm.appendChild(selectLabel);

    const newSelect = document.createElement("select");
    newSelect.setAttribute("id", `booking-select`);
    newSelect.setAttribute("name", `booking-select`);

    for (const spot of parkingArray) {
        const newItem = document.createElement("option");
        const spotStatus = (isFree(date, spot.id, bookingList))

        if (spotStatus) {
            const newItemText = document.createTextNode(`Parkplatz Nr. ${spot.id}`);
            newItem.appendChild(newItemText);
            newItem.setAttribute("value", `${spot.id}`);
            newSelect.appendChild(newItem);
        }
    }
    bookingForm.appendChild(newSelect);

    const submitBtn = document.createElement("button");
    const submitBtnText = document.createTextNode("Jetzt Buchen");
    submitBtn.appendChild(submitBtnText);
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "booking-submit");
    bookingForm.appendChild(submitBtn);

}