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

        // id of parkingspot
        const newIdSpan = document.createElement("span");
        const parkId = spot.id;
        newIdSpan.textContent = `Parkplatz Nr. ${spot.id}`;
        newIdSpan.setAttribute("class", "parking-span");
        newA.appendChild(newIdSpan);

        // status of parkingspot
        const newStatusSpan = document.createElement("span");
        const spotStatus = isFree(date, parkId, bookingList);
        if (spotStatus) {

            newStatusSpan.textContent = 'Status : frei';
        } else if (!spotStatus) {
            newStatusSpan.textContent = 'Status : gebucht';
        }
        newA.classList.add(classMapping(spotStatus, 'status'));
        newA.appendChild(newStatusSpan);

        //type of parkingspot
        const newTypeSpan = document.createElement("span");
        const spotType = isWide(parkId, parkingArray);
        if (spotType) {
            newTypeSpan.textContent = 'Dies ist ein breiterer Parkplatz';
        } else {
            newTypeSpan.textContent = 'Dies ist ein normaler Parkplatz';
        }
        newTypeSpan.classList.add(classMapping(spotType, 'type'));
        newA.appendChild(newTypeSpan);

        // location of parkingspot
        const newLocSpan = document.createElement("span");
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

function classMapping(boolean, type) {
    if (type === 'status') {
        switch (boolean) {
            default:
            case true :
                return 'free';
            case false :
                return 'booked';
        }
    } else if (type === 'type') {
        switch (boolean) {
            default :
            case true :
                return 'wide';
            case false :
                return 'normal';
        }
    }
}