
// "Ronaldo transfers to Real Madrid" ====> "https://nytimes.com/ronaldo-transfers-to-real-madrid.html"

const createSlug = story => `https://nytimes.com/${story.trim().split(" ").join("-").toLowerCase()}.html` 

// "Ronaldo transfers to Real Madrid" ====> "rttrm-208572"

const createId = story => story.match(/\b(\w)/g).join("").toLowerCase() + "-" + Math.floor(Math.random()*1000000)

export const utils = { 
    createId , 
    createSlug 
}
