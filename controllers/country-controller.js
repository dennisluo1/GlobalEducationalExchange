const Country = require('../models/country');

const countryController = {};

countryController.show = (req, res) => {
    Country.findById (req.params.id)
    .then(country => {
    //   res.render('global/country', {
    //     currentPage: 'country',
    //     message: 'ok',
    //     data: country,
    //   }); 
    res.json(country)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

module.exports = countryController;