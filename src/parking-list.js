import {getStatus} from "./parking-status.js";

export function createParkingList(date, bookingList, parkingArray) {
    const bodyDiv = document.querySelector(".body-div")
    const currentDiv = document.getElementById("parking");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "parking-list")

    for (const spot of parkingArray) {
        const newA = document.createElement("a");
        const newIdDiv = document.createElement("span");
        const newStatusDiv = document.createElement("span");
        const newTypeDiv = document.createElement("span");
        const newLocDiv = document.createElement("span");

        const newIdText = document.createTextNode(`Parkplatz Nr. ${spot.id}`);
        newIdDiv.appendChild(newIdText);
        newA.appendChild(newIdDiv);

        const parkId = spot.id;
        const spotStatus = getStatus(date, parkId, bookingList);

        if (spotStatus === "free") {
            const newStatusText = document.createTextNode(`Status : frei`);
            newStatusDiv.appendChild(newStatusText);
            newA.setAttribute("class", "free");
        } else if (spotStatus === "booked") {
            const newStatusText = document.createTextNode(`Status : gebucht`);
            newStatusDiv.appendChild(newStatusText);
            newA.setAttribute("class", "booked");
        } else {
            const newStatusText = document.createTextNode(`Status : nicht abrufbar`);
            newStatusDiv.appendChild(newStatusText);
            newA.setAttribute("class", "unknown")
        }
        newA.appendChild(newStatusDiv);

        if (spot.type === "wide") {
            const newTypeText = document.createTextNode(`Dies ist ein breiterer Parkplatz`);
            newTypeDiv.appendChild(newTypeText);
            newTypeDiv.setAttribute("class", "wide")
        } else {
            const newTypeText = document.createTextNode(`Dies ist ein normaler Parkplatz`);
            newTypeDiv.appendChild(newTypeText);
        }
        newA.appendChild(newTypeDiv);

        if (spot.distance === "close") {
            const newLocText = document.createTextNode(`Nah an Ein-/ Ausgang : ja `);
            newLocDiv.appendChild(newLocText);
        } else {
            const newLocText = document.createTextNode(`Nah an Ein-/ Ausgang : nein `);
            newLocDiv.appendChild(newLocText);
        }
        newA.appendChild(newLocDiv);
        newA.setAttribute("id", `${spot.id}`);
        newDiv.appendChild(newA);
    }
    bodyDiv.replaceChild(newDiv, currentDiv);
    newDiv.setAttribute("id", "parking")
}