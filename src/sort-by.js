import {getStatus} from "./parking-status.js";


export function sortNew(selected, parkingArray, date, bookingList) {
    const parkingArrayCopy = parkingArray.slice();

    switch (selected) {
        case 'by-id':
            parkingArrayCopy.sort((a, b) => a.id - b.id);
            break;

        case 'by-status':
            parkingArrayCopy.sort((a, b) => {
                a = getStatus(date, a.id, bookingList);
                b = getStatus(date, b.id, bookingList);
                if (a > b
                ) {
                    return -1;
                } else if (getStatus(date, a.id, bookingList) < getStatus(date, b.id, bookingList)) {
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