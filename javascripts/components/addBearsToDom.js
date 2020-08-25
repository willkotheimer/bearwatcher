import { bearsArray, bearsBanner } from '../helpers/data/bearsArray.js';
import { totalFish } from '../helpers/data/totalFish.js';
import { makeEvent } from '../components/eventlisters.js';
import { sortBears } from './sortmethod.js';


const makeRiver = () => {

    $("#river").html("");

    sortBears(bearsArray, 'caughtfish').forEach((item, index) => {
        $("#river").append(`
        
        <div id="card-border"> 
        <div class="card" style="width: 18rem;">
        <div class="img-container" style="background-image: url(${item.imageUrl})">
        </div>
        <div class="award-${(item.caughtfish != 0) ? index : ""}">${(bearsBanner[index] && item.caughtfish != 0) ? bearsBanner[index] : ""}</div>

            <div class="card-body">
              <h2 class="card-title">${item.name}</h2>
              
            </div>
            <div class="progressButtons">
                <button class="btn btn-warning" id="attempt-${index}"><b id="display-attempt-${index}">${item.attempts}</b><i class="fas fa-fish"></i>Attempted</button>
                
                <button class="btn btn-danger" id="caught-${index}"><b id="display-caught-${index}">${item.caughtfish}</b><i class="fas fa-fish"></i> Caught</button>
                
                
                
            </div
            <div class="counters">
                <h6 id="time"><i class="fas fa-fish"></i> Last Caught</h6>
                <b id="timeStamp">${item.dateTime || "<i class='fas fa-ban'></i> none caught"}</b>
                <h6 id="totalTitle">All Bears <i class="fas fa-fish"></i></h6>
                <b id="totalCount">${totalFish.amount}</b>
                <h6 id="totalTitle">% of Total <i class="fas fa-fish"></i></h6>
                <b id="totalCount">${(item.caughtfish / (totalFish.amount || 1)).toFixed(2)}%</b>
                <h6 id="totalTitle">% of Own <i class="fas fa-fish"></i></h6>
                <b id="totalCount">${(item.caughtfish / (item.attempts || 1)).toFixed(2)}%</b>
            </div>
        </div>
        </div>
        
        `);

        //Add event listeners for river:

        $(`#attempt-${index}`).click(makeEvent);
        $(`#caught-${index}`).click(makeEvent);

    });

}

export { makeRiver }
