const http = require('http');
const url = require('url');
const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url === '/') {
        response.end('<h1>This is my Home Page</h1>');
    }
    else if (request.url === '/about') {
        response.end('This is my About Page');
    }
    else if (request.url === '/products') {
        response.end('This is my Products Page');
    }
    else if (request.url === '/contact') {
        response.end('This is my Contact Page');
    }
    else {
        response.writeHead(404)
        response.end('Page not found, 404 error');
    }

})

const port = 8000;

server.listen(port, '127.0.0.1', () => {
    console.log("server working successfully on port no " + port)
})