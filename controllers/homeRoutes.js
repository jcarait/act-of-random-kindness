const router = require('express').Router();
const { User, Task, TaskLocation } = require ('../models');
const withAUth = require ('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/task/:id', async (req, res) => {
  try {


    res.render('task', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', async (req, res) => {
  try {
    res.render('profile', {
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    } else {
    res.render('login');
  } 
} catch (err) {
    res.status(500).json(err);
  }
});

router.get('/tasks', withAUth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const taskData = await Task.findAll({
      include: [{
        model: User,
        attributes: ['user_name'],
      }]
    });

    const tasks = taskData.map((task) => task.get({ plain: true}));

    res.render('tasks', {
      tasks,
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err);
  }

  
});

module.exports = router;