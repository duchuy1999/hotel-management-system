import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

// const rooms = [...Array(9)].map((_, index) => ({
//     id: faker.datatype.uuid(),
//     name: faker.name.fullName(),
//     bookingStatus: sample(['Not Booked', 'Booked']),
//     checkinStatus: sample(['Not Checked-in', 'Checked-in']),
//     checkoutStatus: sample(['Not Checked-out', 'Checked-out']),
// }));

const rooms = [...Array(9)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.datatype.number({ min: 100, max: 399 }),
  type: sample(['Single', 'Double', 'Deluxe']),
  bookingStatus: sample(['Not Booked', 'Booked']),
  checkinStatus: sample(['Not Checked-in', 'Checked-in']),
  checkoutStatus: sample(['Not Checked-out', 'Checked-out']),
}));


export default rooms;