var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var axios = require('axios');

app.use(bodyParser.json());
app.use(cors());

app.post("/starwars", (req,res) => {
    var param=req.body.param;
    axios.get('https://swapi.co/api/people/?search='+param).then((apires)=>{
        res.send(apires.data);
    })
})

app.get("/hello", (req,res)=> {
    res.send('hello world');
} );
var port=8686;
app.listen(port, ()=>{
    console.log('Listening on ' + port);
})