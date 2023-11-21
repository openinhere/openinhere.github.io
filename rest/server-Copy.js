const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Halo! Ini adalah server Node.js sederhana, saya menghubungkan menggunakan Esp32 secara langsung dan Menggunakan aplikasi Arduino Ide, karena menurut saya melalui Wokwi sangat sulit.');
});

server.listen(port, hostname, () => {
  console.log(`Server berjalan di http://${hostname}:${port}/`);
});
