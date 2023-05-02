const http = require("http");
const fs = require("fs");
const myserver = http.createServer((req, res) => {
    const log = '${Date.now()}: ${req.url} New Req Received\n';
    fs.appendFile("log.txt", log, (err,data) => {
        if(req.url=="/") {
         let data = fs.readFileSync('home.html','utf8');
         res.end(data);
        }
      else if(req.url=="/Contact"){
        let data = fs.readFileSync('Contact.html','utf8');
        res.end(data);
      }
      else if(req.url=="/About"){
        let data = fs.readFileSync('About.html','utf8');
        res.end(data);
      }
     else if(req.url=="/Terms") {
        let data = fs.readFileSync('Terms.html','utf8');
        res.end(data);
     }
    })
});

myserver.listen(3000, () => console.log("Server Started!"));
