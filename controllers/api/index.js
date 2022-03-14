const router = require('express').Router();
//const taskRoutes = require('./task-routes');
const userRoutes = require('./user-routes');
// const taskLocationRoutes = require('./task-location-routes');

// router.use('/tasks', taskRoutes);
router.use('/users', userRoutes);

const taskRoutes = require('./task-routes');
// const userRoutes = require('./user-routes');
// const taskLocationRoutes = require('./task-location-routes');

router.use('/tasks', taskRoutes);
// router.use('/users', userRoutes);
// router.use('/task-locations', taskLocationRoutes);

module.exports = router;
