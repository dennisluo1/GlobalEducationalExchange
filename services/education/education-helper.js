require('isomorphic-fetch');
require('dotenv').config();


const API_KEY = process.env.API_KEY;

function getCountryData(req, res, next) {
    fetch(`http://countryapi.gear.host/v1/Country/getCountries?pName=china`)
        .then(fetchRes => fetchRes.json())
        .then(jsonRes => {
            res.render('global/global-country')
            console.log(jsonRes);
            next();
        }).catch(err => {
            console.log(err);
            next(); 
        }) 
    console.log('Education')
    next()
}

module.exports = {
    getCountryData,
};