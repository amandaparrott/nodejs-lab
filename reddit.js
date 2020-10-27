const path = require('path');
const fs = require('fs');
const request = require('request');
const dataPath = path.join(__dirname, './popular-articles.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);
    //console.log(res);
    let articles = [];
    let redditData = JSON.parse(body)
    redditData.data.children.forEach(item => {
        articles.push({
            title: item.data.title,
            url: item.data.url,
            author: item.data.author
        });
    });
    articles = JSON.stringify(articles);
    fs.writeFileSync(dataPath, articles);
});
