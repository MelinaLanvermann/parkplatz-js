import {isClose, isFree, isWide} from "./parking-attributes.js";
import {sortNew} from "./sort-by.js";
import {generateBookingDOM} from "./app.js";

export function renderParkingList(date, bookingList, parkingArray) {
    let parkingArrayCopy = parkingArray.slice();
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "parking-list");
    newDiv.setAttribute("id", "parking-list");

    const sortingForm = renderSortingForm();
    newDiv.appendChild(sortingForm);

    sortingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(sortingForm);
        const sortOption = Array.from(data).find(([key]) => key === 'sorting-option')[1];

        parkingArrayCopy = sortNew(sortOption, parkingArrayCopy, date, bookingList);
        generateBookingDOM(date, bookingList, parkingArrayCopy);
    })

    for (const spot of parkingArrayCopy) {
        const newA = document.createElement("a");
        const newIdSpan = document.createElement("span");
        const newStatusSpan = document.createElement("span");
        const newTypeSpan = document.createElement("span");

        const newLocSpan = document.createElement("span");
        newLocSpan.textContent = `Parkplatz Nr. ${spot.id}`;
        newIdSpan.setAttribute("class", "parking-span");

        newA.appendChild(newIdSpan);
        const parkId = spot.id;

        const spotStatus = isFree(date, parkId, bookingList);
        if (spotStatus) {
            newStatusSpan.textContent = 'Status : frei';
            newA.setAttribute("class", "free");
        } else if (!spotStatus) {
            newStatusSpan.textContent = 'Status : gebucht';
            newA.setAttribute("class", "booked");
        }
        newA.appendChild(newStatusSpan);

        const spotType = isWide(parkId, parkingArray);
        if (spotType) {
            newTypeSpan.textContent = 'Dies ist ein breiterer Parkplatz';
            newTypeSpan.setAttribute("class", "wide")
        } else {
            newTypeSpan.textContent = 'Dies ist ein normaler Parkplatz';
        }
        newA.appendChild(newTypeSpan);

        const spotDistance = isClose(parkId, parkingArray);
        if (spotDistance) {
            newLocSpan.textContent = 'Nah an Ein-/ Ausgang : Ja';
        } else {
            newLocSpan.textContent = 'Nah an Ein-/ Ausgang : Nein';
        }
        newA.appendChild(newLocSpan);
        newA.setAttribute("id", `${spot.id}`);
        newDiv.appendChild(newA);
    }
    return newDiv
}

function renderSortingForm() {
    const sortingForm = document.createElement("form");
    sortingForm.setAttribute("action", "");
    sortingForm.setAttribute("target", "_self");
    sortingForm.setAttribute("method", "post");
    sortingForm.setAttribute("name", "sorting-form");
    sortingForm.setAttribute("id", "sorting-form");

    const newSpan = document.createElement("span");
    newSpan.textContent = "Sortieren nach : ";
    sortingForm.appendChild(newSpan);

    const sortingOptions = ["by-id", "by-status", "by-type"];
    for (const option of sortingOptions) {
        const newLabel = document.createElement("label");
        newLabel.setAttribute("for", option);

        const newInput = document.createElement("input");
        newInput.setAttribute("id", option);
        newInput.setAttribute("name", "sorting-option");
        newInput.setAttribute("type", "radio");
        newInput.setAttribute("value", option);
        newLabel.appendChild(newInput);

        const newSpan = document.createElement("span");
        newSpan.textContent = option;
        newLabel.appendChild(newSpan);

        sortingForm.appendChild(newLabel);
    }

    const newBtn = document.createElement("button");
    newBtn.setAttribute("type", "submit");
    newBtn.setAttribute("id", "sorting");
    newBtn.textContent = "Sortieren";
    sortingForm.appendChild(newBtn);

    return sortingForm;
}