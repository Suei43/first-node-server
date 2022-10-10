const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request,response)=>{
    if(request.url === '/' || request.url === '/home.html'){
        let filePath = path.join(__dirname, 'public', 'home.html')
        fs.readFile(filePath, 'utf8', (err,data)=>{
            response.writeHead(200,{'Content-Type': 'text/html'})
            response.end(data)
        })
    }
    if(request.url === '/about.html'){
        let filePath = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filePath, 'utf8', (err,data)=>{
            response.writeHead(200,{'Content-Type': 'text/html'})
            response.end(data)
        })
    }
    if(request.url === '/contact.html'){
        let filePath = path.join(__dirname, 'public', 'contact.html')
        fs.readFile(filePath, 'utf8', (err,data)=>{
            response.writeHead(200,{'Content-Type': 'text/html'})
            response.end(data)
        })
    }
})
const port = 3000

server.listen(port,()=>{
    console.log('Server is now running!')
});