const express = require('express');
const handleErrors = require('./utils/handleErrors');
const router = require('./router');

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(router);

app.use(handleErrors);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
