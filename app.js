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
            "platform": "google",
            "type": "custom_payload",
            "payload": {
              "google": {
                "expectUserResponse": true,
                "isSsml": false,
                "noInputPrompts": [],
                "richResponse": {
                  "items": [
                    {
                      "simpleResponse": {
                        "displayText": "hi",
                        "textToSpeech": "hello"
                      }
                    }
                  ],
                  "suggestions": [
                    {
                      "title": "Say this"
                    },
                    {
                      "title": "or this"
                    }
                  ]
                },
                "systemIntent": {
                  "data": {
                    "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
                    "listSelect": {
                      "items": [
                        {
                          "optionInfo": {
                            "key": "key1",
                            "synonyms": [
                              "key one"
                            ]
                          },
                          "title": "must not be empty"
                        },
                        {
                          "optionInfo": {
                            "key": "key2",
                            "synonyms": [
                              "key two"
                            ]
                          },
                          "title": "must not be empty, but unique, for some reason"
                        }
                      ]
                    }
                  },
                  "intent": "actions.intent.OPTION"
                }
              }
            }
          
    }
    res.json(list);
})

app.listen(PORT, () => {
    console.log('listening');
});