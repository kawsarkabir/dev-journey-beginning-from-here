/* var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080); */

let http = require('http');
function hello(req, res){
      res.writeHead(404)
      res.end('yeah ! habibi')
}
let server = http.createServer(hello)
server.listen(8080)