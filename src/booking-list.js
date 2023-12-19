export function renderBookingsList(bookingList) {
    const bookingsForm = document.getElementById("bookings-list");
    bookingsForm.setAttribute("action", "");
    bookingsForm.setAttribute("target", "_self");
    bookingsForm.setAttribute("method", "post");
    bookingsForm.setAttribute("name", "bookings-list");

    const headline = document.createElement("h4");
    const headlineText = document.createTextNode('Aktuelle Buchungen : ');
    headline.appendChild(headlineText);
    bookingsForm.appendChild(headline);

    const newList = document.createElement("div");
    newList.setAttribute("class", "booking-list");
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
        const newDateText = document.createTextNode(`${item.date} : `);
        newDateSpan.appendChild(newDateText);

        newA.appendChild(newDateSpan);
        const newParkSpan = document.createElement("span");
        const newParkText = document.createTextNode(`Parkplatz Nr. ${item.parkId}`);
        newParkSpan.appendChild(newParkText);

        newA.appendChild(newParkSpan);
        newList.appendChild(newA);
    }

    bookingsForm.appendChild(newList);

    const editBtn = document.createElement("button");
    const editBtntext = document.createTextNode('Bearbeiten');
    editBtn.setAttribute("type", "submit");
    editBtn.setAttribute("id", "booking-edit-btn");
    editBtn.appendChild(editBtntext);
    bookingsForm.appendChild(editBtn);
}

export function renderChooseDate() {
    const chooseDateForm = document.getElementById("choose-date");

    chooseDateForm.setAttribute("action", "");
    chooseDateForm.setAttribute("target", "_self");
    chooseDateForm.setAttribute("method", "post");
    chooseDateForm.setAttribute("name", "choose-date");

    const headlineLabel = document.createElement("label")
    const headline = document.createElement("h4");
    const headlineText = document.createTextNode("Jetzt buchen : ");
    headline.appendChild(headlineText);
    headlineLabel.appendChild(headline);
    headlineLabel.setAttribute("for", "check-date");
    chooseDateForm.appendChild(headlineLabel);


    const choosedateInput = document.createElement("input");
    choosedateInput.setAttribute("type", "date");
    choosedateInput.setAttribute("id", "check-date");
    choosedateInput.setAttribute("required", "");
    chooseDateForm.appendChild(choosedateInput);

    const checkdateBtn = document.createElement("button");
    const checkdateText = document.createTextNode("Jetzt buchen");
    checkdateBtn.appendChild(checkdateText);
    checkdateBtn.setAttribute("type", "submit");
    checkdateBtn.setAttribute("id", "check-date-btn");
    chooseDateForm.appendChild(checkdateBtn);

}