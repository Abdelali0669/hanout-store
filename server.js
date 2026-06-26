const express = require('express');
const path = require('path');
const app = express();

// Railway تضع رقم المنفذ في متغير نظام يسمى PORT
// إذا لم تجده، سنستخدم 8080 كخيار احتياطي
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`الخادم يعمل الآن على المنفذ ${port}`);
});