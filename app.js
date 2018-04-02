process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

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
    let list = {"messages": [
        {
          "items": [
            {
              "description": "Item One Description",
              "image": {
                "url": "http://imageOneUrl.com"
              },
              "optionInfo": {
                "key": "itemOne",
                "synonyms": [
                  "thing one",
                  "object one"
                ]
              },
              "title": "Item One"
            },
            {
              "description": "Item Two Description",
              "image": {
                "url": "http://imageTwoUrl.com"
              },
              "optionInfo": {
                "key": "itemTwo",
                "synonyms": [
                  "thing two",
                  "object two"
                ]
              },
              "title": "Item Two"
            }
          ],
          "platform": "google",
          "title": "Title",
          "type": "list_card"
        }
      ]
    }
    res.json(list);
})

app.listen(PORT, () => {
    console.log('listening');
});