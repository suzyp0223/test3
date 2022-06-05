const express = require('express');
const app = express();
const port = 3000;

const connect = require("./schemas");
connect();

app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl, ' - ', new Date());
    next();
});


app.use(express.static('static'));
app.use(express.urlencoded());
app.use(express.json());

const goodsRouter = require("./routes/goods");

app.use("/api", [goodsRouter]);

app.get('/', (req, res) => {
    res.send('Hello World!'); 
  });

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});