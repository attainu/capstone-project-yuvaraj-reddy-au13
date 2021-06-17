import canon from './images/canon.jpeg'
import puma from './images/puma.jpg'
import redmi from './images/redmi.jpg'
import samsungm12 from './images/samsungm12.jpg'



const products = [
    {
    id: "1",
    name: "Canon Power Shot",
    image: canon,
    description:
        "The bestselling PowerShot G7 X, which packed a large sensor within a sleek, compact body, now has a new, improved second-generation model",

    brand : "Canon",
    category : "Electronics",
    price : 34990,
    countInStock : 5,
    ratings : 4,
    numReviews : 5

},

{
    id: "2",
    name: "Redmi Note 10 Pro",
    image: redmi,
    description:
        "Colour:Dark Night | Size name:128 GB 120Hz high refresh rate FHD+ 1080x2400), 6.67 inch large AMOLED Dot display with 20:9 aspect ratio and HDR 10 support ensures smooth and superior multimedia viewing experience ",

    brand : "Redmi",
    category : "Mobiles",
    price : 15990,
    countInStock : 10,
    ratings : 4,
    numReviews : 8  
},
{
    id: "3",
    name: "Samsung Galaxy M12",
    image: samsungm12,
    description:
        "Packed with a host of features, it scores high in terms of functionality. This makes it a must-have.",

    brand : "Samsung",
    category : "Mobiles",
    price : 13490,
    countInStock : 15,
    ratings : 4.5,
    numReviews : 14   
},

{
    id: "4",
    name: " Puma Men's Jacket ",
    image: puma,
    description:
        " With this padded jacket you're never going to be cold. Thanks to its warmCELL technology, all your body heat stays where you want it: close to your body.",

    brand : "Puma",
    category : "Fashion",
    price : 3500,
    countInStock : 11,
    ratings : 4.5,
    numReviews : 7   
},

];


export default products;
