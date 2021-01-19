const express = require('express');
const bodyParser = require('body-parser')
const contactService = require('./services/contactService');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

app.post('/api/contact', async (req, res, next) => {
    //Guardamos el comentario
    try {
        const result = await contactService.persistContactMessage(req.body);
        res.json(result.ops);
    } catch(err) {
        next(err);
    } 
});

app.listen(port, ()=> {
    console.log(`up and running at localhost:${port}`);
})