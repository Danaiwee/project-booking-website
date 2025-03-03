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

export const PROPERTY_TYPES = [
    {id: 1, title: 'Hotels', amount: 120, image: hotelImg},
    {id: 2, title: 'Apartments', amount: 140, image: apartmentImg},
    {id: 3, title: 'Resorts', amount: 80, image: resortImg},
    {id: 4, title: 'Villas', amount: 100, image: villaImg},
    {id: 5, title: 'Cabins', amount: 60, image: cabinImg}
];

export const DESTINATIONS1 = [
    {id: 1, title: 'Bangkok', image: bangkok},
    {id: 2, title: 'Chiang Mai', image: chiangmai},
];

export const DESTINATIONS2 = [
    {id: 3, title: 'Pattaya', image: pattaya},
    {id: 4, title: 'Phuket', image: phuket},
    {id: 5, title: 'Samui', image: samui}
];