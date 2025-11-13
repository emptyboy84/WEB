const express = require('express');
const app = express();
const PORT = 5001;

app.use(express.static(__dirname));

// API 엔드포인트: index.js의 결과를 전달
app.get('/api/results', (req, res) => {
  const sum = calculateSum(5, 3);
  const product = calculateProduct(5, 3);
})

//route for index.html
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
  /*
  res.json({
    sum: sum,
    product: product
  });*/

//default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.js');
});



app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
