import {isFree, isWide} from "./parking-attributes.js";


export function sortNew(selected, parkingArray, date, bookingList) {
    const parkingArrayCopy = parkingArray.slice();

    switch (selected) {
        default:
        case 'by-id':
            parkingArrayCopy.sort((a, b) => a.id - b.id);
            break;

        case 'by-status':
            parkingArrayCopy.sort((a, b) => {
                a = isFree(date, a.id, bookingList) ? 1 : 0;
                b = isFree(date, b.id, bookingList) ? 1 : 0;

                return b - a;
            })
            break;

        case 'by-type':
            parkingArrayCopy.sort((a, b) => {
                a = isWide(a.id, parkingArray) ? 1 : 0;
                b = isWide(b.id, parkingArray) ? 1 : 0;

                return b-a;
            })
            break;

    }
    return parkingArrayCopy;
}