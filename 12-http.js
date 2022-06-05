const http = require('http');

const server = http.createServer((req, resp) => {
    if(req.url === '/'){
        resp.end('Welcome to my home page!');
    }else if(req.url === '/about'){
        resp.end('About us:');
    }else{
        resp.end(`
            <h1> Oops!</h1>
            <p> The page you requested doesn't exist</p>
            <a href='/'> Go Back</a>
        `);
    }
});

server.listen(5001);