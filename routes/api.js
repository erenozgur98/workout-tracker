const router = require('express').Router();
const Workout = require('../models/Workout.js');

router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', ({ body }, res) => {
    db.Workout.update({ _id: mongojs.objectId(body.params.id)}, { $push: { excercises: body }}, { new: true }, (err, workouts) => {
        if (err) throw err;
        res.json(workouts);
    });
});
    
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post('/api/workouts/bulk', ({ body }, res) => {
    Workout.insertMant(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;