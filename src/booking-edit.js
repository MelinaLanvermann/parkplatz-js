import {getStatus} from "./parking-status.js";

export function bookingEdit(bookId, bookingList, parkingArray) {
    const found = bookingList.find((Booking) => Booking.id === bookId);

    // placement in document
    const editForm = document.getElementById("edit-form");
    editForm.setAttribute("action", "");
    editForm.setAttribute("target", "_self");
    editForm.setAttribute("method", "post");
    editForm.setAttribute("name", "edit-form");

    //new elements
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const spotLabel = document.createElement("label");
    const spotSelect = document.createElement("select");
    const submitButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    //attributes of elements
    dateLabel.setAttribute("for", "edit-date");
    dateInput.setAttribute("id", "edit-date");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("value", `${found.date}`);

    spotLabel.setAttribute("for", "edit-spot");
    spotSelect.setAttribute("id", "edit-spot");
    for (const spot of parkingArray) {
        const spotStatus = getStatus(found.date, spot.id, bookingList);

        const spotOption = document.createElement("option");
        spotOption.setAttribute("value", `${spot.id}`);
        const optionText = document.createTextNode(`Parkplatz Nr. ${spot.id}`);
        spotOption.appendChild(optionText);
        if (spot.id === found.parkId) {
            spotOption.setAttribute("selected", "true");
            spotSelect.appendChild(spotOption);
        } else {
            if (spotStatus === "free") {
                spotSelect.appendChild(spotOption);
            }
        }

    }

    //button attributes
    submitButton.setAttribute("id", "edit-submit");
    submitButton.setAttribute("type", "submit");
    deleteButton.setAttribute("id", "delete-submit");
    deleteButton.setAttribute("type", "submit");

    //creating and appending textnodes
    const dateText = document.createTextNode(`Datum : `);
    dateLabel.appendChild(dateText);
    const spotText = document.createTextNode(`Parkplatz : `);
    spotLabel.appendChild(spotText);
    const submitText = document.createTextNode(`Änderungen speichern`);
    submitButton.appendChild(submitText);
    const deleteText = document.createTextNode(`Buchung löschen`);
    deleteButton.appendChild(deleteText);

    //appending form children
    editForm.appendChild(dateLabel);
    editForm.appendChild(dateInput);
    editForm.appendChild(spotLabel);
    editForm.appendChild(spotSelect);
    editForm.appendChild(submitButton);
    editForm.appendChild(deleteButton);

}