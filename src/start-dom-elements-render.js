import {isDateValid} from "./app.js";

export function renderBookedList(bookingList) {
    const bookingsForm = document.createElement("form");
    bookingsForm.setAttribute("action", "");
    bookingsForm.setAttribute("target", "_self");
    bookingsForm.setAttribute("method", "post");
    bookingsForm.setAttribute("name", "bookings-list");
    bookingsForm.setAttribute("id", "bookings-form");
    bookingsForm.setAttribute("class", "bookings-form");

    const headline = document.createElement("h4");
    headline.textContent = 'Aktuelle Buchungen :';
    bookingsForm.appendChild(headline);

    const newList = document.createElement("div");
    newList.setAttribute("class", "bookings-list");
    newList.setAttribute("id", "bookings-list");

    for (const item of bookingList) {

        const newA = document.createElement("a");

        newA.setAttribute("id", `${item.id}`);
        const newRadio = document.createElement("input");
        newRadio.setAttribute("type", "radio");
        newRadio.setAttribute("name", "booking-item")
        newRadio.setAttribute("value", `${item.id}`);

        newA.appendChild(newRadio);
        const newDateSpan = document.createElement("span");
        newDateSpan.textContent = item.date;

        newA.appendChild(newDateSpan);
        const newParkSpan = document.createElement("span");
        newParkSpan.textContent = `Parkplatz Nr. ${item.parkId}`;

        newA.appendChild(newParkSpan);
        if (isDateValid(item.date)){
            newList.appendChild(newA);
        }
    }

    bookingsForm.appendChild(newList);

    const editBtn = document.createElement("button");
    editBtn.setAttribute("type", "submit");
    editBtn.setAttribute("id", "booking-edit-btn");
    editBtn.textContent = 'Bearbeiten';
    bookingsForm.appendChild(editBtn);

    return bookingsForm;
}

export function renderChooseDate() {
    const chooseDateForm = document.createElement("form");
    chooseDateForm.setAttribute("action", "");
    chooseDateForm.setAttribute("target", "_self");
    chooseDateForm.setAttribute("method", "post");
    chooseDateForm.setAttribute("name", "choose-date");
    chooseDateForm.setAttribute("id", "choose-date");
    chooseDateForm.setAttribute("class", "choose-date");

    const headlineLabel = document.createElement("label")
    const headline = document.createElement("h4");
    headline.textContent = 'Jetzt buchen :';
    headlineLabel.appendChild(headline);
    headlineLabel.setAttribute("for", "check-date");
    chooseDateForm.appendChild(headlineLabel);


    const choosedateInput = document.createElement("input");
    choosedateInput.setAttribute("type", "date");
    choosedateInput.setAttribute("id", "check-date");
    choosedateInput.setAttribute("required", "");
    chooseDateForm.appendChild(choosedateInput);

    const checkdateBtn = document.createElement("button");
    checkdateBtn.textContent = 'Jetzt buchen';
    checkdateBtn.setAttribute("type", "submit");
    checkdateBtn.setAttribute("id", "check-date-btn");
    chooseDateForm.appendChild(checkdateBtn);

    return chooseDateForm;

}