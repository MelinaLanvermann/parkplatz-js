export function isFree(date, parkId, bookingList) {

    return !bookingList.find((Booking) => Booking.date === date && Booking.parkId === parkId);
}