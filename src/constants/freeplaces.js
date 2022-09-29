import garrafonview from '../assets/isla/garrafon2.jpg';
import playaluna from '../assets/isla/luna.jpg';
import javi from '../assets/isla/javi.jpg';
import playanorte from '../assets/isla/mia.jpg';
import caminata from '../assets/isla/caminata.png';
import puntasur from '../assets/isla/puntasur3.jpg';

const FreeList = [
  {
    id: 1,
    name: 'PLAYA NORTE',
    description: 'Walk to mia, take a taxi to playa norte on and walk all over until you find mia',
    menu: 'https://goo.gl/maps/4M8ZdE2aqVSwjfY17',
    img: playanorte,
    btnTag: 'MAPS',
  },
  {
    id: 2,
    name: 'PLAYA PET FRIENDLY',
    description: 'This is a picture of our family members how loves go to their lovely dogs on the beach',
    // phone: '9993861435',
    menu: 'https://goo.gl/maps/taopJU9vMa7Mxv9t6',
    img: javi,
    btnTag: 'MAPS',
  },
  {
    id: 3,
    name: 'PUNTA SUR',
    description: 'Some of this is free, but there is a cost to walk to Ixchel castle',
    menu: 'https://goo.gl/maps/Vou7rtfHvdTbXjp78',
    img: puntasur,
    btnTag: 'MAPS',
  },
  {
    id: 4,
    name: 'SIDEWALK OF THE CARIBEAN ON MIRADOR EL ACANTILADO',
    description: 'If your stady is for long term, you should defenitly wanna go out to run meanwhile enjoy the view',
    // phone: '9993861435',
    menu: 'https://goo.gl/maps/iNik4bwqHMdWnHso9',
    img: caminata,
    btnTag: 'MAPS',
  },
  {
    id: 4,
    name: 'GARRAFON VIEW',
    description: 'There a amazing view, we recommend to have rented a golf car',
    // phone: '9993861435',
    menu: 'https://g.page/garrafon-islamujeres?share',
    img: garrafonview,
    btnTag: 'MAPS',
  },
  {
    id: 5,
    name: 'PLAYA LUNA',
    description: "Warning, you can't swim there but view is amazing, and your feets will love it. To get there, first take a picture on the pier and walk in direction to mia, remember NOT TO SWIM THERE ",
    img: playaluna,
    menu: 'https://goo.gl/maps/qiTsemfeYsbUFmKs5',
    btnTag: 'MAPS',
  },
];

export default FreeList;
