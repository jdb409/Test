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
            "speech": 'sfdgfdsgds',
            "type": 0,
            "displayText":'asdfasdf'
            }
        ]
    }
    res.json(list);
})

app.listen(PORT, () => {
    console.log('listening');
});