import {isFree} from "./parking-status.js";

export function renderParkingList(date, bookingList, parkingArray) {
    const bodyDiv = document.getElementById("booking-page-main");
    // const currentDiv = document.getElementById("parking");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "parking-list")

    for (const spot of parkingArray) {
        const newA = document.createElement("a");
        const newIdSpan = document.createElement("span");
        const newStatusSpan = document.createElement("span");
        const newTypeSpan = document.createElement("span");
        const newLocSpan = document.createElement("span");

        const newIdText = document.createTextNode(`Parkplatz Nr. ${spot.id}`);
        newIdSpan.appendChild(newIdText);
        newIdSpan.setAttribute("class", "parking-span");
        newA.appendChild(newIdSpan);

        const parkId = spot.id;
        const spotStatus = isFree(date, parkId, bookingList);

        if (spotStatus) {
            const newStatusText = document.createTextNode(`Status : frei`);
            newStatusSpan.appendChild(newStatusText);
            newA.setAttribute("class", "free");
        } else if (!spotStatus) {
            const newStatusText = document.createTextNode(`Status : gebucht`);
            newStatusSpan.appendChild(newStatusText);
            newA.setAttribute("class", "booked");
        }
        newA.appendChild(newStatusSpan);

        if (spot.type === "wide") {
            const newTypeText = document.createTextNode(`Dies ist ein breiterer Parkplatz`);
            newTypeSpan.appendChild(newTypeText);
            newTypeSpan.setAttribute("class", "wide")
        } else {
            const newTypeText = document.createTextNode(`Dies ist ein normaler Parkplatz`);
            newTypeSpan.appendChild(newTypeText);
        }
        newA.appendChild(newTypeSpan);

        if (spot.distance === "close") {
            const newLocText = document.createTextNode(`Nah an Ein-/ Ausgang : ja `);
            newLocSpan.appendChild(newLocText);
        } else {
            const newLocText = document.createTextNode(`Nah an Ein-/ Ausgang : nein `);
            newLocSpan.appendChild(newLocText);
        }
        newA.appendChild(newLocSpan);
        newA.setAttribute("id", `${spot.id}`);
        newDiv.appendChild(newA);
    }
    // bodyDiv.replaceChild(newDiv, currentDiv);
    newDiv.setAttribute("id", "parking");
    bodyDiv.appendChild(newDiv);
}