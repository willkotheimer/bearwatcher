import { bearsArray } from './../helpers/data/bearsArray.js'
import { makeRiver } from './addBearsToDom.js';

const addBears = () => {


    const name = $("#name").val();
    const imageUrl = $("#imageUrl").val();

    bearsArray.push({
        name: name,
        imageUrl: imageUrl,
        attempts: 0,
        caughtfish: 0
    });

    makeRiver(bearsArray);
    $("#name").val("");
    $("#imageUrl").val("");

}

// https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/GrizzlyBearJeanBeaufort.jpg/1024px-GrizzlyBearJeanBeaufort.jpg




export { addBears }