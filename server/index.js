var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var axios = require('axios');

app.use(bodyParser.json());
app.use(cors());

// app.post("/starwars", (req,res) => {
//     var param=req.body.param;
//     axios.get('http://api.icndb.com/jokes/random').then((apires)=>{
//         res.send(apires.data);
//     })
// })

var favoriteJokes = ['This is a fake joke'];

app.post("/joke", (req,res) => {
    console.log('this one')
    var param=req.body.param;

})

app.get('/favorites', (req, res) => {
    // console.log('running')
    res.send(favoriteJokes)
})

app.get("/hello", (req,res)=> {
    res.send('hello world');
} );
var port=8686;
app.listen(port, ()=>{
    console.log('Listening on ' + port);
})





// axios.get('http://api.icndb.com/jokes/random?firstName='+firstName+'&lastName='+lastName).then((apires)=>{
//     res.send(apires.data);
// })