//Server That gets from the client the ip, lang and soft

var express = require('express'),
    colors = require('colors');
    
var app = express();

app.get('/', function(req, res){
    
    var ipadress = req.headers['x-forwarded-for'];
    var lang = req.headers['accept-language'].match(/^[a-z]{2}\-[A-Z]{2}/).toString();
    var software = req.headers['user-agent'].match(/\(([^\)]+)\)/);
    
    console.log(req.headers['user-agent']);
    res.send({"ipaddress":ipadress, "language": lang, "software": software[1]});
    //console.log(req.headers);
});

app.listen(process.env.PORT || 8080, function(){
    console.log('server running: https://fcc-basejumps-abel1987.c9users.io')
});