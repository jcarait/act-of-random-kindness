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

router.get('/tasks/:id', async (req, res) => {
  try {


    res.render('tasks', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', async (req, res) => {
  console.log(req.session.user_id);
  try {
    // Find the logged in user based on the session ID
    const taskData = await Task.findAll({
      where: [
        {
        creator_id: req.session.user_id,
      }
    ],
      include: [
        {
          model: User,
        },
        { 
        model: TaskLocation,
      },
    ]
    });

    

    const tasks = taskData.map((task) => task.get({ plain: true}));

    console.log(tasks);

    res.render('profile', {
      tasks,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }

  
});

router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    if (req.session.logged_in) {
      res.redirect('/tasks');
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
    res.render('profile', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;