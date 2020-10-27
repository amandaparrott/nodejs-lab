const path = require('path');
const fs = require('fs');
const request = require('request');
const dataPath = path.join(__dirname, '../popular-downloads.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    
    let redditData = JSON.parse(body);
    redditData.data.children.forEach(item => {
        let dataType = path.extname(item.data.url);
       if (err) {
        console.log(err);
    } else if (dataType === '.jpg' || dataType === '.gif' || dataType === '.png') {
        request(item.data.url).pipe(fs.createWriteStream(`./downloads/${item.data.author}${dataType}`)
    )};
})});
