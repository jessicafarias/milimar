import garrafonview from '../assets/isla/garrafon2.jpg';
import playaluna from '../assets/isla/luna.jpg';
import javi from '../assets/isla/javi.jpg';
import playanorte from '../assets/isla/mia.jpg';
import caminata from '../assets/isla/caminata.png';
import puntasur from '../assets/isla/puntasur3.jpg';
import nomads from '../assets/isla/nomads.jpg';
import selina from '../assets/isla/selina.jpg';

const FreeList = [
  {
    id: 1,
    name: 'PLAYA NORTE (FREE)',
    description: 'Walk to mia, take a taxi to playa norte on and walk all over until you find mia',
    menu: 'https://goo.gl/maps/4M8ZdE2aqVSwjfY17',
    img: playanorte,
    btnTag: 'MAPS',
  },
  {
    id: 2,
    name: 'PLAYA PET FRIENDLY (FREE)',
    description: 'This is a picture of our family members how loves go to their lovely dogs on the beach',
    // phone: '9993861435',
    menu: 'https://goo.gl/maps/taopJU9vMa7Mxv9t6',
    img: javi,
    btnTag: 'MAPS',
  },
  {
    id: 3,
    name: 'PUNTA SUR (FREE)',
    description: 'Some of this is free, but there is a cost to walk to Ixchel castle',
    menu: 'https://goo.gl/maps/Vou7rtfHvdTbXjp78',
    img: puntasur,
    btnTag: 'MAPS',
  },
  {
    id: 4,
    name: 'SIDEWALK OF THE CARIBEAN ON MIRADOR EL ACANTILADO (FREE)',
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
    name: 'PLAYA LUNA (FREE)',
    description: "Warning, you can't swim there but view is amazing, and your feets will love it. To get there, first take a picture on the pier and walk in direction to mia, remember NOT TO SWIM THERE ",
    img: playaluna,
    menu: 'https://goo.gl/maps/qiTsemfeYsbUFmKs5',
    btnTag: 'MAPS',
  },
  {
    id: 6,
    name: 'NOMADS (COVER)',
    description: "Are you looking for hippie party, let's go nomads!",
    img: nomads,
    menu: 'https://g.page/NomadsIslaMujeres?share',
    btnTag: 'MAPS',
  },
  {
    id: 7,
    name: 'SELINA / POCNA (COVER)',
    description: 'Are you looking for party on the beach in the night, you can go to dance electronic/salsa and more by different DJ per day, super fun, open in the night until 2am!',
    img: selina,
    menu: 'https://goo.gl/maps/CR5353kcJcij3bsD8',
    btnTag: 'MAPS',
  },
];

export default FreeList;
