const router = require('express').Router();
const { Task, TaskLocation } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const taskData = await TaskLocation.findAll();
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;