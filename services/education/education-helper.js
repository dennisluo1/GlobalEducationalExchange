require('isomorphic-fetch');
require('dotenv').config();


const API_KEY = process.env.API_KEY;

function getCountryData(req, res) {
    fetch(`http://countryapi.gear.host/v1/Country/getCountries?pName=${req.body.country}`)
        .then(fetchRes => fetchRes.json())
        .then(jsonRes => {
            res.render('global/global-country-info', {
              data : jsonRes.Response,  
            })
            console.log(jsonRes);
      
        }).catch(err => {
            console.log(err);
          
        }) 
    console.log('Education')

}

module.exports = {
    getCountryData,
};