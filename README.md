# Week 5 - Bear Watcher project
This was a group project which we completed individually.

## Motivation
The motivation of this project was to plan together but complete the project alone, with minimal help. It allowed us to cement knowledge of modules in jquery.

## Build status
MVP is complete. It includes a form to upload images and name the bears, as well as to capture information about attempts and caught fish for each bear. A stretch goal will be to sort them by caught fish and assign a 1st, 2nd, and 3rd status to the bear cards.

## Code Style
Jquery ES6, HTML5, CSS3

## Screenshots

![](assets/images/BearWatcher.gif)

## Wireframe
https://www.figma.com/file/wYwBAj4kSLAmPZledjaWNg/BearWatcher

## Features
 Additional to allowing users to track fish caught and attempted, the app creates percentage data for each bear and for their contribution to individual fish caught.

## Code Example
```             
import { bearsArray } from './../helpers/data/bearsArray.js';
import { makeRiver } from './addBearsToDom.js';
import { totalFish } from '../helpers/data/totalFish.js';

const makeEvent = (e) => {
    const target = e.target.id;
    console.log(target);
    const bear = target.split('-');
    const action = bear[0];
    const id = bear[1];
    switch (action) {
        case 'attempt':
            bearsArray[id].attempts++;
            break;
        case 'caught':
            bearsArray[id].attempts++; //each caught is also an attempt!
            bearsArray[id].caughtfish++;
            bearsArray[id].dateTime = new Date();
            totalFish.amount += 1;
            break;
    }
    makeRiver(bearsArray);

}
export { makeEvent }
```
## The Team
[Will Kotheimer](https://github.com/willkotheimer)

