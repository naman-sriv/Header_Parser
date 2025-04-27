require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('/public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/api/whoami', (req, res)=>{
    const ip_address = req.header("x-forwarded-for") || req.socket.remoteAddress;
    const language = req.header("accept-language");
    const software = req.header("user-agent");
    res.json({
        ipaddress: ip_address,
        language: language,
        software: software
    });
});

const listener = app.listen(process.env.PORT || 3000, ()=>{
    console.log("Your app is listening on port "+listener.address().port);
});

