import { bearsArray } from '../helpers/data/bearsArray.js'

const makeRiver = () => {

    $("#river").html("");
    bearsArray.forEach((item, index) => {
        if (item != undefined) {

            $("#river").append(`
        
            <div class="card" style="width: 18rem;">
                <img class="img-thumbnail" src="${item.imageUrl}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text"></p>
                </div>
            </div>
    
            `);

        }

    });

}

export { makeRiver }
