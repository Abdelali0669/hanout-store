const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// هذا السطر يخبر الخادم أن يرسل ملف index.html للزوار
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`الخادم يعمل على المنفذ ${port}`);
});