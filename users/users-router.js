const router = require("express").Router();

// Import data model
const Users = require("./users-model");

// Write CRUD operations
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      console.log(users);
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// Export router
module.exports = router;
