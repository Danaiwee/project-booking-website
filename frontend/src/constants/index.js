import hotelImg from '/propertyTypes/hotels.jpg';
import apartmentImg from '/propertyTypes/apartments.jpg';
import resortImg from '/propertyTypes/resorts.jpg';
import villaImg from '/propertyTypes/villas.jpg';
import cabinImg from '/propertyTypes/cabins.jpg';

import bangkok from '/destinations/bangkok.jpg';
import chiangmai from '/destinations/chiangmai.jpg';
import pattaya from '/destinations/pattaya.jpg';
import phuket from '/destinations/phuket.jpg';
import samui from '/destinations/samui.jpg';

import room1 from '/room/room-1.jpg';
import room2 from '/room/room-2.jpg';
import room3 from '/room/room-3.jpg';
import room4 from '/room/room-4.jpg';
import room5 from '/room/room-5.jpg';
import room6 from '/room/room-6.jpg';
import room7 from '/room/room-7.jpg';
import room8 from '/room/room-8.jpg';
import room9 from '/room/room-9.jpg';
import room10 from '/room/room-10.jpg';
import room11 from '/room/room-11.jpg';
import room12 from '/room/room-12.jpg';


export const PROPERTY_TYPES = [
    {id: 1, title: 'Hotels', amount: 120, image: hotelImg},
    {id: 2, title: 'Apartments', amount: 140, image: apartmentImg},
    {id: 3, title: 'Resorts', amount: 80, image: resortImg},
    {id: 4, title: 'Villas', amount: 100, image: villaImg},
    {id: 5, title: 'Cabins', amount: 60, image: cabinImg}
];

export const DESTINATIONS1 = [
    {id: 1, title: 'Bangkok', image: bangkok, src: 'bangkok'},
    {id: 2, title: 'Chiang Mai', image: chiangmai, src:'chiang mai'},
];
export const DESTINATIONS2 = [
    {id: 3, title: 'Pattaya', image: pattaya, src: 'pattaya'},
    {id: 4, title: 'Phuket', image: phuket, src: 'phuket'},
    {id: 5, title: 'Samui', image: samui, src: 'samui'}
];

export const ROOM_IMAGES = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12];
