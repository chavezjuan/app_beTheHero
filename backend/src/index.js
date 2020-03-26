const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // ./ mesma pasta do arquivo index
const app = express();

app.use(cors());
app.use(express.json()); //A requisição deverá ser interpretada como JSON
app.use(routes);


app.listen(3333);