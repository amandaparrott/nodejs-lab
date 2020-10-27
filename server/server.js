const path = require('path');
const fs = require('fs');

const chirpPath = path.join(__dirname, '../chirps.json');

const chirps = [
   {
       id: 1,
       name: "Nick",
       message: "I really enjoy the instrument of the cello."
   },
   {
       id: 2,
       name: "Jess",
       message: "Don’t settle for substitutes, swettle for swubsti-swuits!"
   },
   {
       id: 3,
       name: "Winston",
       message: "Winston and Ferguson, bout to splist some pasta"
   },
   {
       id: 4,
       name: "Coach",
       message: "I take dumps standing up! I'm a man!"
   },
   {
       id: 5,
       name: "Schmidt",
       message: "Ma called, the bees are back!"
   }
];

fs.writeFile(chirpPath, JSON.stringify(chirps), (err) =>{
    if (err) {
        console.log(err);
    }
    console.log("you chirped, little buddy!")
});

fs.readFile(chirpPath, {
    encoding: "utf-8"
}, (err, data) => {
    console.log(data);
})