import React from 'react';
import ReactDOM from 'react-dom';

import Guests from './components/guests_page';
import * as serviceWorker from './serviceWorker';

import './index.css';

const GUESTS = [
  {
    "id": "1",
    "name": "Sheryl Hardin",
    "age": 39,
    "gender": "female",
    "email": "sherylhardin@providco.com",
    "phone": "+91 (875) 446-2076"
  },
  {
    "id": "2",
    "name": "Gloria Peters",
    "age": 31,
    "gender": "female",
    "email": "gloriapeters@providco.com",
    "phone": "+91 (887) 531-2626"
  },
  {
    "id": "3",
    "name": "Mollie Hopper",
    "age": 40,
    "gender": "female",
    "email": "molliehopper@providco.com",
    "phone": "+91 (952) 532-2816"
  },
  {
    "id": "4",
    "name": "Marcia Valentine",
    "age": 39,
    "gender": "female",
    "email": "marciavalentine@providco.com",
    "phone": "+91 (846) 535-3679"
  },
  {
    "id": "5",
    "name": "Leanna Stein",
    "age": 40,
    "gender": "female",
    "email": "leannastein@providco.com",
    "phone": "+91 (905) 544-3641"
  },
  {
    "id": "6",
    "name": "Albert Frederick",
    "age": 38,
    "gender": "male",
    "email": "albertfrederick@providco.com",
    "phone": "+91 (919) 542-2214"
  },
  {
    "id": "7",
    "name": "Gabrielle Baker",
    "age": 23,
    "gender": "female",
    "email": "gabriellebaker@providco.com",
    "phone": "+91 (918) 536-3337"
  },
  {
    "id": "8",
    "name": "Josefina Glenn",
    "age": 40,
    "gender": "female",
    "email": "josefinaglenn@providco.com",
    "phone": "+91 (889) 596-2901"
  },
  {
    "id": "9",
    "name": "Deanne Mason",
    "age": 36,
    "gender": "female",
    "email": "deannemason@providco.com",
    "phone": "+91 (999) 431-2346"
  },
  {
    "id": "10",
    "name": "Ilene Madden",
    "age": 33,
    "gender": "female",
    "email": "ilenemadden@providco.com",
    "phone": "+91 (857) 458-2392"
  },
  {
    "id": "11",
    "name": "Lourdes Patton",
    "age": 35,
    "gender": "female",
    "email": "lourdespatton@providco.com",
    "phone": "+91 (919) 405-2522"
  },
  {
    "id": "12",
    "name": "Hebert Hess",
    "age": 34,
    "gender": "male",
    "email": "heberthess@providco.com",
    "phone": "+91 (977) 469-3142"
  },
  {
    "id": "13",
    "name": "Latonya Burris",
    "age": 27,
    "gender": "female",
    "email": "latonyaburris@providco.com",
    "phone": "+91 (800) 465-2467"
  },
  {
    "id": "14",
    "name": "Courtney Camacho",
    "age": 39,
    "gender": "female",
    "email": "courtneycamacho@providco.com",
    "phone": "+91 (881) 527-2431"
  }
]

ReactDOM.render(<Guests data={GUESTS} />, document.getElementById('root'));

serviceWorker.unregister();
