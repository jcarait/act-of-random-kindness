const router = require('express').Router();
const { User, Task, TaskLocation } = require ('../models');
const withAUth = require ('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const taskData = await Task.findAll({
      include: [
        {
          model: User,
          as: 'creator',
          attributes: ['first_name'],
        }
      ],
    });

    const tasks = taskData.map((task) => task.get({ plain: true }));

    res.render('homepage', {
      tasks,
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
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
    
      include: [
        {
          model: Task,
          as: 'creator_tasks'
        }
      ]
    });

  
    const user = userData.get({ plain: true});

    console.log(user);

    res.render('profile', {
      ...user,
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
    const taskData = await Task.findAll({
      include: [
        {
          model: Task,
          through: {
            attributes: ['createdAt']
          }
        },
      ]
    });

    const task = taskData.get({ plain: true});

    console.log(task);

    res.render('tasks', {
      task,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;