// const express = require('express');
// const app = express();

// // Endpoint untuk menerima GET request
// app.get('/api/data', (req, res) => {
//   // Di sini, kamu bisa menambahkan log atau operasi lain yang sesuai dengan kebutuhanmu
//   console.log('Menerima GET request dari Arduino!');
  
//   // Kirim respons kembali ke Arduino
//   res.status(200).send('Berhasil menerima GET request dari Arduino!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server berjalan di port ${PORT}`);
// });



const http = require('http');

// const hostname = '127.0.0.1'; // Atau ganti dengan '0.0.0.0' untuk mendengarkan dari luar
const hostname = '0.0.0.0'; // Atau ganti dengan '0.0.0.0' untuk mendengarkan dari luar
const port = 3000; // Port yang ingin digunakan, bisa diganti sesuai kebutuhan

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Halo! Ini adalah server Node.js sederhana, saya menghubungkan menggunakan Esp32 secara langsung dan Menggunakan aplikasi Arduino Ide, karena menurut saya melalui Wokwi sangat sulit.');
});

server.listen(port, hostname, () => {
  console.log(`Server berjalan di http://${hostname}:${port}/`);
});
