import { bearsArray } from '../helpers/data/bearsArray.js';
import { totalFish } from '../helpers/data/totalFish.js';
import { makeEvent } from '../components/eventlisters.js';

const makeRiver = () => {

    $("#river").html("");
    bearsArray.forEach((item, index) => {
        $("#river").append(`
        
        <div class="card" style="width: 18rem;">
        <div class="img-container" style="background-image: url(${item.imageUrl})">
        </div>

            <div class="card-body">
              <h2 class="card-title">${item.name}</h2>
              <p class="card-text"></p>
            </div>
            <div class="progressButtons">
                <button id="attempt-${index}">Attempted</button>
                <b id="display-attempt-${index}">${item.attempts}</b>
                <button id="caught-${index}">Caught</button>
                <b id="display-caught-${index}">${item.caughtfish}</b>
                
            </div
            <div class="counters">
                <h6 id="time">Last Caught:</h6>
                <b id="timeStamp">${item.dateTime || "none caught"}</b>
                <h6 id="totalTitle">Total Fish Caught:</h6>
                <b id="totalCount">${totalFish.amount}</b>
            </div>
        </div>
        
        `);

        //Add event listeners for river:

        $(`#attempt-${index}`).click(makeEvent);
        $(`#caught-${index}`).click(makeEvent);

    });

}

export { makeRiver }
