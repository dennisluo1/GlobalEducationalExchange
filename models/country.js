const db = require('../db/config');

const Country = {};
// Select from the country table, not important now but as I continue to develop idea, this may come in handy
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