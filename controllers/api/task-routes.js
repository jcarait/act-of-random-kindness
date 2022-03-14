const router = require('express').Router();
const { Task, User, Location } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll();
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Task.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;