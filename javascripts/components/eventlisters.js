import { bearsArray } from './../helpers/data/bearsArray.js';
import { makeRiver } from './addBearsToDom.js';
import { totalFish } from '../helpers/data/totalFish.js';



const makeEvent = (e) => {

    const target = e.target.id;
    console.log("increase attempts" + target);
    const bear = target.split('-');
    const action = bear[0];
    const id = bear[1];
    switch (action) {
        case 'attempt':
            bearsArray[id].attempts++;
            break;
        case 'caught':
            bearsArray[id].caughtfish++;
            bearsArray[id].dateTime = new Date();
            totalFish.amount += 1;
            break;
    }


    makeRiver(bearsArray);

}


export { makeEvent }

