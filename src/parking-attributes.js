export function isFree(date, parkId, bookingList) {
    return !bookingList.some((Booking) => Booking.date === date && Booking.parkId === parkId);
}

export function isWide(parkId, parkingArray) {
    return parkingArray.some((Parking) => Parking.id === parkId && Parking.type === "wide");
}

export function isClose(parkId, parkingArray) {
    return parkingArray.some((Parking) => Parking.id === parkId && Parking.distance === "close");
}