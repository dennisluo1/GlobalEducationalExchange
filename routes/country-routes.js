const express = require('express');
const countryRoutes = express.Router();
const authHelpers=require('../services/auth/auth-helpers');

const countryController=require('../controllers/country-controller');

countryRoutes.get('/', (req, res) => {
    res.render('global/global-country');
});

countryRoutes.get('/:id', countryController.show);

module.exports=countryRoutes;