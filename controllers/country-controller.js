const Country = require('../models/country');

const countryController = {};
// make sure to show the country info
countryController.show = (req, res) => {
    Country.findById (req.params.id)
    .then(country => {
    res.json(country)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

module.exports = countryController;