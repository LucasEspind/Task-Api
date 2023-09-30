require('dotenv').config({path:'.env'});

const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const bodyParser = require('body-parser');

const seeder = require('./seeder');

const PORT = process.env.PORT || 3333

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', routes);

seeder.seedData();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})