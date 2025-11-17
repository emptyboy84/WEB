const express = require('express');
const app = express();
const PORT = 5001;

app.use(express.static(__dirname));

// index.js에서 함수 가져오기
const { calculateSum } = require('./index.js');

// 결과를 보여주는 페이지
app.get('/', (req, res) => {
  const result = calculateSum(5, 3);
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>결과</title>
    </head>
    <body>
        <h1>계산 결과</h1>
        <p>5 + 3 = <strong>${result}</strong></p>
    </body>
    </html>
  `);
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
