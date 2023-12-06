import {parkingMocks} from "./mock_data.js";

export function createParkingList() {
    const currentDiv = document.getElementById("parking");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "parking-list")

    for (const spot of parkingMocks) {
        const newA = document.createElement("a");
        const newIdDiv = document.createElement("span");
        const newStatusDiv = document.createElement("span");
        const newTypeDiv = document.createElement("span");
        const newLocDiv = document.createElement("span");

        const newIdText = document.createTextNode(`Parkplatz Nr. ${spot.id}`);
        newIdDiv.appendChild(newIdText);
        newA.appendChild(newIdDiv);

        if (spot.status === "free") {
            const newStatusText = document.createTextNode(`Status : frei`);
            newStatusDiv.appendChild(newStatusText);
            newA.setAttribute("class", "free");
        } else if (spot.status === "booked") {
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
    document.body.replaceChild(newDiv, currentDiv);
    newDiv.setAttribute("id", "parking")
}