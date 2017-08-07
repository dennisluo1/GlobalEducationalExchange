const Global = require('../models/global');

const globalsController = {};

globalsController.index = (req, res) => {
  Global.findAll()
    .then(globals => {
      res.render('global/global-add', {
        currentPage: 'add',
        message: 'ok',
        data: globals,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};
// Render to global-single page
globalsController.show = (req, res) => {
  Global.findById(req.params.id)
    .then(globals => {
      res.render('global/global-single', {
        currentPage: 'show',
        message: 'ok',
        data: globals,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};
// Creating a new fund-raising table
globalsController.create = (req, res) => {
  Global.create({
    title: req.body.title,
    cost: req.body.cost,
    category: req.body.category,
    description: req.body.description,
    deadline: req.body.deadline,
  }).then(() => {
    res.redirect('/globals');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};     
// This is to update the fund raising
globalsController.update = (req, res) => {
  Global.update({
    title: req.body.title,
    cost: req.body.cost,
    category: req.body.category,
    description: req.body.description,
    deadline: req.body.deadline,
  }, req.params.id).then(globals => {
    res.redirect(`/globals/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
// Edit page
globalsController.edit = (req, res) => {
  Global.findById(req.params.id)
    .then(globals => {
      res.render('global/global-single-edit', {
        currentPage: 'edit',
        data: globals,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
// Delete the item
globalsController.delete = (req, res) => {
  Global.destroy(req.params.id)
    .then(() => {
      res.redirect('/globals');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = globalsController;