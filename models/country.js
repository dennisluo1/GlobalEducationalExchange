const db = require('../db/config');

const Country = {};

Country.findAll = () => {
  return db.query('SELECT * FROM country');
}

Country.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM country
    WHERE id = $1
  `, [id]);
}

module.exports=Country;