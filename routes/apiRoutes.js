const router = require('express').Router();
const { Workout } = require('../models');
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', ({ body }, res) => {
    db.Workout.findOneAndReplace({ _id: body.params.id }, { $push: { excercises: body }}, { new: true }, (err, workouts) => {
        if (err) throw err;
        res.json(workouts);
    });
});
    
router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;