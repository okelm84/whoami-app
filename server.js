var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 8080))

app.get('*',function(req,res){
    var result ={};
    var lang = req.headers["accept-language"];
    var myip = req.headers['x-forwarded-for'] || req.connection.remoteAddress ||  req.socket.remoteAddress ||  req.connection.socket.remoteAddress;
    var mysoftware = req.headers["user-agent"];
    result.ipaddress = myip;
    result.language = lang.slice(0,2); 
    result.software = mysoftware.slice(mysoftware.indexOf('(')+1,mysoftware.indexOf(')'));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
});



app.listen(app.get('port'));