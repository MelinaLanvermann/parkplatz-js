import {isFree} from "./parking-attributes.js";
import {generateBookingDOM} from "./app.js";

export function renderBookingForm(date, bookingList, parkingArray) {

    const bookingForm = document.createElement("form");
    bookingForm.setAttribute("action", "");
    bookingForm.setAttribute("target", "_self");
    bookingForm.setAttribute("method", "post");
    bookingForm.setAttribute("name", "booking-form");
    bookingForm.setAttribute("id", "booking-form");
    bookingForm.setAttribute("class", "booking-form");

    const dateLabel = document.createElement("label");
    dateLabel.textContent = 'Wunschdatum :';
    dateLabel.setAttribute("for", "booking-date");
    bookingForm.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "booking-date");
    dateInput.setAttribute("value", `${date}`);
    dateInput.setAttribute("required", "");
    bookingForm.appendChild(dateInput)

    dateInput.addEventListener("input", (e) => {
        e.preventDefault();

        const changedDate = dateInput.value;

        generateBookingDOM(changedDate, bookingList, parkingArray);
    })

    const selectLabel = document.createElement("label");
    selectLabel.textContent = 'Parkplatz :';
    selectLabel.setAttribute("for", "booking-select");
    bookingForm.appendChild(selectLabel);

    const newSelect = document.createElement("select");
    newSelect.setAttribute("id", `booking-select`);
    newSelect.setAttribute("name", `booking-select`);

    for (const spot of parkingArray) {
        const newItem = document.createElement("option");
        const spotStatus = (isFree(date, spot.id, bookingList))

        if (spotStatus) {
            newItem.textContent = `Parkplatz Nr. ${spot.id}`;
            newItem.setAttribute("value", `${spot.id}`);
            newSelect.appendChild(newItem);
        }
    }
    bookingForm.appendChild(newSelect);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = 'Jetzt buchen';
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "booking-submit");
    bookingForm.appendChild(submitBtn);

    return bookingForm;
}