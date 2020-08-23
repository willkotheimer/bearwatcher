import { bearsArray } from './../helpers/data/bearsArray.js'
import { makeRiver } from './addBearsToDom.js';

const addBears = () => {


    const name = $("#name").val();
    const imageUrl = $("#imageUrl").val();


    bearsArray.push({
        name: name,
        imageUrl: imageUrl,
        attempts: 0,
        caughtfish: 0,
        dateTimeLastAttempt: 0
    });

    makeRiver(bearsArray);
    $("#name").val("");
    $("#imageUrl").val("");

}






export { addBears }