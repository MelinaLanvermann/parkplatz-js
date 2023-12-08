// import {parkingMocks} from "./mock-data.js";
// import {createParkingList} from "./parking-list.js";
//
// export function sortNew(selected) {
//
//     switch (selected) {
//         case 'byId':
//             parkingMocks.sort((a, b) => a.id - b.id);
//             break;
//         case 'byStatus':
//             parkingMocks.sort((a, b) => {
//                 if (a.status > b.status) {
//                     return -1;
//                 } else if (a.status < b.status) {
//                     return 1;
//                 } else {
//                     return 0;
//                 }
//             })
//             break;
//         case 'byType':
//             parkingMocks.sort((a, b) => {
//                 if (a.type > b.type) {
//                     return -1;
//                 } else if (a.type < b.type) {
//                     return 1;
//                 } else {
//                     return 0;
//                 }
//             })
//             break;
//     }
//     createParkingList();
// }