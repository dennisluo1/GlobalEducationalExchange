const db = require('../db/config');

const Global = {};

Global.findAll = () => {
  return db.query('SELECT * FROM globals');
}

Global.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM globals
    WHERE id = $1
  `, [id]);
}

Global.create = (global) => {
  return db.one(`
    INSERT INTO globals
    (title, cost, category, description)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [global.title, global.cost, global.category, global.description]);
}

Global.update = (global, id) => {
  return db.one(`
    UPDATE globals SET
    title = $1,
    cost = $2,
    category = $3,
    description = $4
    WHERE id = $5
    RETURNING *
  `, [global.title, global.cost, global.category, global.description, id]);
}

Global.destroy = (id) => {
  return db.none(`
    DELETE FROM globals
    WHERE id = $1
  `, [id]);
}

module.exports = Global;