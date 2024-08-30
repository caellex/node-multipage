const http = require('http');
const fs = require('fs')

const connectionString = "server=(localdb)\\Mock;Database=FullTest;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(req.url,"\n", req.method)

    res.setHeader('Content-Type', 'text/html')

    let path = './views/'

    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }


    //send a file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end();
        } else {
            res.end(data);
        }
    });
            
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on port 3000')
})