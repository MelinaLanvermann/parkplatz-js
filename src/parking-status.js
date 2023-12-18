export function getStatus(date, parkId, bookingList) {

    const found = bookingList.find((Booking) => Booking.date === date && Booking.parkId === parkId);
    return !found;
}