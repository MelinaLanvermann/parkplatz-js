export function createBookingList(bookingList) {
    const bodyDiv = document.querySelector(".booking-body");
    const currentDiv = document.querySelector(".booking-list");

    const newList = document.createElement("div");
    newList.setAttribute("id", "booking-list");

    for (const item of bookingList) {
        const newA = document.createElement("a");
        newA.setAttribute("id", `${item.id}`);

        const newDateSpan = document.createElement("span");
        const newDateText = document.createTextNode(`${item.date} : `);
        newDateSpan.appendChild(newDateText);
        newA.appendChild(newDateSpan);

        const newParkSpan = document.createElement("span");
        const newParkText = document.createTextNode(`Parkplatz Nr. ${item.parkId}`);
        newParkSpan.appendChild(newParkText);
        newA.appendChild(newParkSpan);

        newList.appendChild(newA);
    }
    bodyDiv.replaceChild(newList, currentDiv);
    newList.setAttribute("class", "booking-list");
}
