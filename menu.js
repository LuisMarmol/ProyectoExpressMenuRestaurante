const express = require('express');

const menuRoutes = require('./routes/menu-routes');

const app = express();
const port = 3002;

app.use('/api/menu', menuRoutes);

app.listen(port);