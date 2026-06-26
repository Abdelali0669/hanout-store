const express = require('express');
const app = express();

app.use(express.json());

// مسار تجريبي
app.get('/', (req, res) => {
  res.send('حانوت يعمل الآن كخادم!');
});

// استقبال بيانات الطلب
app.post('/order', (req, res) => {
  console.log('وصل طلب جديد:', req.body);
  res.json({ status: 'تم استلام الطلب' });
});

app.listen(3000, () => {
  console.log('الخادم يعمل على المنفذ 3000');
});