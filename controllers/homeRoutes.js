const router = require('express').Router();

router.get('/', (req, res) => {


    res.render('homepage');

});

router.get('/project/:id', async (req, res) => {
  try {


    res.render('project', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', async (req, res) => {
  try {
    

    res.render('profile', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
 

  res.render('login');
});

module.exports = router;
