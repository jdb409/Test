const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const PORT = process.env.PORT || 3000;

const fallbackCounter = {};


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


app.get('/', (req, res, next) => {
    res.send('hello world');
});

app.post('/', (req, res, next) => {
    let list =  {
        "messages": [
            {
              "buttons": [
                {
                  "openUrlAction": {
                    "url": "https://linkUrl.com"
                  },
                  "title": "AoG Card Link title"
                }
              ],
              "formattedText": "AoG Card Description",
              "image": {
                "url": "http://imageUrl.com"
              },
              "platform": "google",
              "subtitle": "AoG Card Subtitle",
              "title": "AoG Card Title",
              "type": "basic_card"
            }
          ]
    }
    res.json(list);
})

app.listen(PORT, () => {
    console.log('listening');
});