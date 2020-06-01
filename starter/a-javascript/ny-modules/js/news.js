
// news.js
// ===========================================================================================

const news = [
    { headline:"Ronaldo transfers to Real Madrid" , type:"sport" },
    { headline:"Signs of water found on Mars" , type:"science" },
    { headline:"Tom Hanks directs documentary about food" , type:"arts" },
    { headline:"Record high temperatures in Spain" , type:"climate" },
    { headline:"Decline in Cash ISA investments" , type:"money" }
]

// ===========================================================================================

const config = {
    legal : "© 2020 The New York Times Company",
    address : "620 Eighth Avenue, New York, NY 10018"
}

// ===========================================================================================

// "Ronaldo transfers to Real Madrid" ====> "https://nytimes.com/ronaldo-transfers-to-real-madrid.html"

const createSlug = story => `https://nytimes.com/${story.trim().split(" ").join("-").toLowerCase()}.html` 

// "Ronaldo transfers to Real Madrid" ====> "rttrm-208572"

const createId = story => story.match(/\b(\w)/g).join("").toLowerCase() + "-" + Math.floor(Math.random()*1000000)

// ===========================================================================================

const drawStory = ob => {

    let story = `
        <a href='${ ob.link}' >
            <section class="story" data-id="${ ob.id }">
                <h4>${ ob.type }</h4>
                <p>${ ob.headline }</p>
            </section>
        </a>
    ` ;

    document.querySelector(".news").innerHTML += story

}

const drawFooter = ({legal,address}) => document.querySelector(".footer").innerHTML += `${address} ${legal}`

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

const stories = news.map( story => ({ ...story, link : createSlug( story.headline ), id:createId( story.headline )}))

// ===========================================================================================

stories.forEach( drawStory );

drawFooter( config );

// ===========================================================================================

// This example uses ES6 modules which must be served from an HTTP address
// Install http-server
// In the terminal run http-server from the folder containing index.html
// Open the browser at http://127.0.0.1:8080

// ===========================================================================================
