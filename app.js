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
              "destinationName": "Destination Name",
              "platform": "google",
              "type": "link_out_chip",
              "url": "http://imageUrl.com"
            }
          ] 
    }
    res.json(list);
})

app.listen(PORT, () => {
    console.log('listening');
});