var http = require('http');

module.exports = function(client, opts) {
  var png = null;

  opts = opts || {};
  
  var server = http.createServer(function(req, res) {

    if (!png) {
      png = client.createPngStream({ log : process.stderr });
      png.on('error', function (err) {
          console.error('png stream ERROR: ' + err);
      });
    }

    res.writeHead(200, { 'Content-Type': 'multipart/x-mixed-replace; boundary=--daboundary' });

    png.on('data', sendPng);

    function sendPng(buffer) {
      console.log(buffer.length);
      res.write('--daboundary\nContent-Type: image/png\nContent-length: ' + buffer.length + '\n\n');
      res.write(buffer);
    }
  });

  server.listen(opts.port || 8000);
};
