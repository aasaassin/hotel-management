import hotelImg01 from '../images/hotel-img01.jpg';
import hotelImg02 from '../images/hotel-img02.jpg';
import hotelImg03 from '../images/hotel-img03.jpg';
import hotelImg04 from '../images/hotel-img04.jpg';
import hotelImg05 from '../images/hotel-img05.jpg';
import hotelImg06 from '../images/hotel-img06.jpg';
import hotelImg07 from '../images/hotel-img07.jpg';
import hotelImg08 from '../images/hotel-img08.jpg';

const hotels = [
    {
        id: '01',
        title: 'Hotel 1',
        city: 'London',
        distance: 300,
        address: 'somewhere',
        price: 99,
        maxGroupSize: 10,
        desc: 'this is the description',
        reviews: [
            {
                name: 'jhon doe',
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: hotelImg01,
        featured: true,
    },
    {
        id: '02',
        title: 'Hotel 2',
        city: 'Indonesia',
        distance: 400,
        address: 'somewhere',
        price: 99,
        maxGroupSize: 8,
        desc: 'this is the description',
        reviews: [
            {
                name: 'jhon doe',
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: hotelImg02,
        featured: true,
    },
    {
        id: '03',
        title: 'Hotel 3',
        city: 'Tokyo',
        distance: 500,
        address: 'somewhere',
        price: 99,
        maxGroupSize: 8,
        desc: 'this is the description',
        reviews: [
            {
                name: 'jhon doe',
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: hotelImg03,
        featured: true,
    },
    {
        id: '04',
        title: 'Hotel 4',
        city: 'HaNoi',
        distance: 500,
        address: 'somewhere',
        price: 99,
        maxGroupSize: 8,
        desc: 'this is the description',
        reviews: [
            {
                name: 'jhon doe',
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: hotelImg04,
        featured: true,
    },
    {
        id: '05',
        title: 'Hotel 5',
        city: 'Roma',
        distance: 500,
        address: 'somewhere',
        price: 99,
        maxGroupSize: 8,
        desc: 'this is the description',
        reviews: [],
        avgRating: 4.5,
        photo: hotelImg05,
        featured: false,
    },
    {
        id: '06',
        title: 'Hotel 6',
        city: 'Bali',
        distance: 500,
        address: 'somewhere',
        price: 99,
        maxGroupSize: 8,
        desc: 'this is the description',
        reviews: [
            {
                name: 'jhon doe',
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: hotelImg06,
        featured: false,
    },
    {
        id: '07',
        title: 'Hotel 7',
        city: 'Bauné',
        distance: 500,
        address: 'somewhere',
        price: 99,
        maxGroupSize: 8,
        desc: 'this is the description',
        reviews: [
            {
                name: 'jhon doe',
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: hotelImg07,
        featured: false,
    },
    {
        id: '08',
        title: 'Hotel 8',
        city: 'Barcelona',
        distance: 500,
        address: 'somewhere',
        price: 99,
        maxGroupSize: 8,
        desc: 'this is the description',
        reviews: [
            {
                name: 'jhon doe',
                rating: 5,
            },
            {
                name: 'jhon doe',
                rating: 4.6,
            },
        ],
        avgRating: 3,
        photo: hotelImg08,
        featured: false,
    },
];

export default hotels;
