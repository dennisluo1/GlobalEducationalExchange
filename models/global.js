const db = require('../db/config');

const Global = {};
// Select from the created globals which is to used to create the fund-raising table
Global.findAll = () => {
  return db.query('SELECT * FROM globals');
}

Global.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM globals
    WHERE id = $1
  `, [id]);
}
// Create new fund-raising table
Global.create = (global) => {
  return db.one(`
    INSERT INTO globals
    (title, cost, category, description, deadline)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [global.title, global.cost, global.category, global.description, global.deadline]);
}
// Updating the table
Global.update = (global, id) => {
  return db.one(`
    UPDATE globals SET
    title = $1,
    cost = $2,
    category = $3,
    description = $4,
    deadline = $5
    WHERE id = $6
    RETURNING *
  `, [global.title, global.cost, global.category, global.description, global.deadline, id]);
}
// Delete the listing
Global.destroy = (id) => {
  return db.none(`
    DELETE FROM globals
    WHERE id = $1
  `, [id]);
}
// Make sure to export this page so it works for MVC
module.exports = Global;