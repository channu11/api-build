const http = require("http")
const app = require("./src/config/express.config")

const server = http.createServer(app);
 //server application load ===>express app 
 
//port no: -2^16-1 ~65535
// ~100 port => well known ports, for different servers
// 25 send
// 21 download
// 80 => http, 443 => https, 21 => ftp, 22 =>smtp, 465,587,2525 =>imap, pop3
// 3306 => mysql, 5432 => postgressql, 27017 => mangodb

// listen(portno, host, (err)=>{})
// ip, dns
server.listen(9000, '127.0.0.1', (err)=>{
  if(!err){
    console.log("Server is running on port 9000")
    console.log("Press ctrl+c to discontinue server...")
  }
})