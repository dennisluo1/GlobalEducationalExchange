const Global = require('../models/global');

const globalController = {};

globalController.index = (req, res) => {
  Global.findAll()
    .then(globals => {
      res.render('global/global-index', {
        currentPage: 'index',
        message: 'ok',
        data: globals,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

globalController.show = (req, res) => {
  Global.findById(req.params.id)
    .then(globals => {
      res.render('globals/global-single', {
        currentPage: 'show',
        message: 'ok',
        data: globals,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

globalController.create = (req, res) => {
  Global.create({
    title: req.body.title,
    cost: req.body.cost,
    category: req.body.category,
    description: req.body.description,
  }).then(() => {
    res.redirect('/globals');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};     

globalController.update = (req, res) => {
  Global.update({
    title: req.body.title,
    cost: req.body.cost,
    category: req.body.category,
    description: req.body.description,
  }, req.params.id).then(globals => {
    res.redirect(`/globals/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

globalController.edit = (req, res) => {
  Global.findById(req.params.id)
    .then(globals => {
      res.render('globals/global-single-edit', {
        currentPage: 'edit',
        data: global,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

globalController.delete = (req, res) => {
  Global.destroy(req.params.id)
    .then(() => {
      res.redirect('/globals');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = globalController;