import pollitochicken from '../assets/food/boneless.jpg';
import cocojaguar from '../assets/food/cocojaguar.jpg';
import oscars from '../assets/food/oscars.jpg';
import ptiburon from '../assets/food/ptiburon.jpg';
import picus from '../assets/food/picus.jpg';

const FoodList = [
  {
    id: 1,
    name: 'POLLITO CHIKEN',
    description: 'Just fastfood to go, delicious boneless, chicken wings and more',
    phone: '(+52) 9983676871',
    menu: 'https://www.facebook.com/PollitoChickenIslaMujeres',
    img: pollitochicken,
    btnTag: 'MENU',
  },
  {
    id: 2,
    name: 'COCO JAGUAR',
    description: 'Restaurant seafood and traditional food',
    phone: 'NO DELIVERY',
    menu: 'https://www.facebook.com/cocojaguar.mx',
    img: cocojaguar,
    btnTag: 'MENU',
  },
  {
    id: 2,
    name: 'PLAYA LANCHEROS',
    description: "A greate beach club, there you can find the famous and deliciuos 'tikinxik' and other seafood",
    phone: 'NO DELIVERY',
    menu: 'https://goo.gl/maps/Wru2yPbwNYs9T7mg8',
    img: ptiburon,
    btnTag: 'MAPS',
  },
  {
    id: 2,
    name: 'OSCARS',
    description: 'A close place where you can find a variety of pizzas',
    phone: '(+52) 9988880916',
    menu: 'https://goo.gl/maps/qsBTukiyccRphAhNA',
    img: oscars,
    btnTag: 'MAPS',
  },
  {
    id: 2,
    name: 'PICUS',
    description: 'A delicious seafood in front of the sea just in the center of the island',
    phone: '(+52) 9988880916',
    menu: 'https://goo.gl/maps/SQEyc5TFbqKfffRe9',
    img: picus,
    btnTag: 'MAPS',
  },
];

export default FoodList;
