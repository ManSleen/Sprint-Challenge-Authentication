const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function find() {
  return db("users as u").select("u.id", "u.username", "u.password");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .del()
    .where({ id });
}
