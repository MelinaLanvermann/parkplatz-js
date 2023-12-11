import {getStatus} from "./parking-status.js";


export function sortNew(selected, parkingArray, date, bookingList) {

    switch (selected) {
        case 'byId':
            parkingArray.sort((a, b) => a.id - b.id);
            break;

        case 'byStatus':
            parkingArray.sort((a, b) => {
                if (getStatus(date, a.id, bookingList) > getStatus(date, b.id, bookingList)) {
                    return -1;
                } else if (getStatus(date, a.id, bookingList) < getStatus(date, b.id, bookingList)) {
                    return 1;
                } else {
                    return 0;
                }
            })
            break;

        case 'byType':
            parkingArray.sort((a, b) => {
                if (a.type > b.type) {
                    return -1;
                } else if (a.type < b.type) {
                    return 1;
                } else {
                    return 0;
                }
            })
            break;
    }
    return parkingArray;
}