const router = require('express').Router();
const { createPoolCluster } = require('mysql2');
const { User, Task, TaskLocation } = require ('../models');
const withAuth = require ('../utils/auth');

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

router.get('/signup', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    } else {
    res.render('signup');
  } 
} catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, { 
      include: [
        {
          model: Task,
          as: 'creator_tasks'
        },
        {
          model: Task,
          as: 'volunteer_tasks'
        },
      ]
    });

    const user = userData.get({ plain: true});

    console.log(user);

    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }

  
});

// router.get('/users/:id', async (req, res) => {

//   try {
//     const userData = await User.findByPk(req.params.id, {
//       include: [
//         {
//           model: Task,
//           attributes: { exclude: ['password'] },
//         },
//         {
//           model: TaskLocation,
//           attributes: { exclude: ['password'] },
//         }
//       ],
//     });

//     const tasks = userData.get({ plain: true});

//     console.log(tasks);

//     res.render('taskbyuserid', {
//       tasks,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }

// });


router.get('/tasks', withAuth, async (req, res) => {

  try {
    const taskData = await Task.findAll({
      include: [
        {
          model: User,
          as: 'creator',
          attributes: { exclude: ['password'] },
        },
        {
          model: User,
          as: 'volunteer',
          attributes: { exclude: ['password'] },
        }
      ],
    });

    console.log(taskData);


    const tasks = taskData.map((task) => task.get({ plain: true }));

    console.log(tasks);

    res.render('tasks', {
      tasks,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/tasks/:id', withAuth, async (req, res) => {

  try {
    const taskData = await Task.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'creator',
          attributes: { exclude: ['password'] },
        },
        {
          model: User,
          as: 'volunteer',
          attributes: { exclude: ['password'] },
        }
      ],
    });

    const tasks = taskData.get({ plain: true});

    console.log(tasks);

    res.render('taskbyid', {
      tasks,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/create-task', withAuth, async (req, res) => {
  try {

    res.render('createTask')
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;