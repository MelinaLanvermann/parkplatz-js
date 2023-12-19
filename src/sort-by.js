import {isFree} from "./parking-status.js";


export function sortNew(selected, parkingArray, date, bookingList) {
    const parkingArrayCopy = parkingArray.slice();

    switch (selected) {
        case 'by-id':
            parkingArrayCopy.sort((a, b) => a.id - b.id);
            break;

        case 'by-status':
            parkingArrayCopy.sort((a, b) => {
                a = isFree(date, a.id, bookingList);
                b = isFree(date, b.id, bookingList);
                if (a > b
                ) {
                    return -1;
                } else if (isFree(date, a.id, bookingList) < isFree(date, b.id, bookingList)) {
                    return 1;
                } else {
                    return 0;
                }
            })
            break;

        case 'by-type':
            parkingArrayCopy.sort((a, b) => {
                if (a.type > b.type) {
                    return -1;
                } else if (a.type < b.type) {
                    return 1;
                } else {
                    return 0;
                }
            })
            break;
        default:

    }
    return parkingArrayCopy;
}