
#### JSON-SERVER

sudo npm i -g json-server          

json-server --port 4000 json/europe.json

http://localhost:4000/europe

fetch("http://localhost:4000/europe").then( r => r.json()).then( data => console.table(data))