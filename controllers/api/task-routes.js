const router = require('express').Router();
const { Task, User, Location } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll();
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;