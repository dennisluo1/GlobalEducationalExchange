const express = require('express');
const globalRoutes = express.Router();


const globalsController = require('../controllers/globals-controller');
const globalsHelpers = require('../services/education/education-helper');

globalRoutes.get('/', globalsController.index);

globalRoutes.post('/country/info', globalsHelpers.getCountryData);
globalRoutes.post('/', globalsController.create);

globalRoutes.get('/add', globalsController.index);
// Need to add the authHelp route

globalRoutes.get('/:id', globalsController.show);
globalRoutes.get('/:id/edit', globalsController.edit);
globalRoutes.put('/:id', globalsController.update);
globalRoutes.delete('/:id', globalsController.delete);

module.exports = globalRoutes;
