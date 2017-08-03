const express = require('express');
const globalRoutes = express.Router();

const globalsController = require('../controllers/globals-controller');


globalRoutes.get('/', globalsController.index);
globalRoutes.post('/', globalsController.create);

globalRoutes.get('/add', (req, res) => {
  res.render('globals/global-add', {
    currentPage: 'add',
  });
});

globalRoutes.get('/:id', globalsController.show);
globalRoutes.get('/:id/edit', globalsController.edit);
globalRoutes.put('/:id', globalsController.update);
globalRoutes.delete('/:id', globalsController.delete);

module.exports = globalRoutes;
