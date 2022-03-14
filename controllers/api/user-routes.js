const router = require('express').Router();

const { User } = require('../../models');


router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll();
       console.log(userData); 
      
  
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;