'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/users.json') {
        console.log("reading again");
        const jsonData = require('./users.json');
        console.log(jsonData);
        res.write('data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("Welcome to Sports Management Club");
        res.write('Welcome to Sports Management Club');
        res.end();
    } else {
      //  res.writeHead(200);
        res.write('Server loaded.');
        res.end();

    }
}).listen(3000, function() {

    // The server object listens on port 3000
    console.log("server start at port 8081");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/
//
let players = {
    "players":[
        {
            "name": "Akash",
            "phone": "9148827639",
            "role": "goalie",
            "performance": 0.92,
            "salary": 20000
        },
        {
            "name": "Bale",
            "phone": "9100997798",
            "role": "cornerback",
            "performance": 0.65,
            "salary": 12000
        },
        {
            "name": "Benett",
            "phone": "9800657341",
            "role": "fielder",
            "performance": 0.78,
            "salary": 23000
        },
        {
            "name": "Stenny",
            "phone": "8935667832",
            "role": "quarterback",
            "performance": 0.91,
            "salary": 21300
        },
        {
            "name": "Ashwin",
            "phone": "91009902",
            "role": "cornerback",
            "performance": 0.87,
            "salary": 12000
        },
       
]

};

let data = JSON.stringify(players);

fs.writeFile('./database.json', data, (err) => {
    console.log('WRITTING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./database.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let man = JSON.parse(data);
    console.log(man);

});