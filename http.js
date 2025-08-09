const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to Home Page...')
        return
    }
    if(req.url === '/about'){
        res.end('there is sort history')
        return
    }
    res.end(`<h1>Ops!...</h1> <p>We cant seem the find the page your loking for...</p> <a href='/'>back home</a>`)
})
server.listen(2000)