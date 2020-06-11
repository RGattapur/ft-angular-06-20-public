
// news.js
// ===========================================================================================

import { news as nytimes } from "./data.js"; // import {news} from "./data.js"

import config from "./config.js"; // import {config} from "./config.js"

import {utils} from "./utils.js"; // import {createSlug, createId} from "./utils.js"

import * as view from "./view.js"; // import {drawStory, drawFooter} from "./view.js"

// ===========================================================================================

/*
Add a link and ID to each story object.

{ 
    headline:"Ronaldo transfers to Real Madrid" , 
    type:"sport", 
    link:"https://nytimes.com/ronaldo-transfers-to-real-madrid.html", 
    id: "rttrm-208572"
}
*/

const stories = nytimes.map( story => ({ ...story, link : utils.createSlug( story.headline ), id: utils.createId( story.headline )}))

// ===========================================================================================

stories.forEach( view.drawStory );

view.drawFooter( config );

// ===========================================================================================

// This example uses ES6 modules which must be served from an HTTP address
// Install http-server
// In the terminal run http-server from the folder containing index.html
// Open the browser at http://127.0.0.1:8080

// ===========================================================================================
