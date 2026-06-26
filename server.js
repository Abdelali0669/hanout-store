const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

// ربط المسارات بالصفحات
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/cart', (req, res) => res.sendFile(__dirname + '/cart.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + '/contact.html'));

app.listen(port, '0.0.0.0', () => {
    console.log(`الموقع يعمل على المنفذ ${port}`);
});