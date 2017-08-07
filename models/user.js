const db = require('../db/config');

const User = {};
// This is the My Profile page
User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};
// Creating new my profile
User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest, firstname, lastname)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.username, user.email, user.password_digest, user.firstname, user.lastname]);
};

User.findUserGlobals=id=>{
    return db.manyOrNone(`
    SELECT * FROM globals
    WHERE user_id=$1
    `,[id]);
};

module.exports = User;