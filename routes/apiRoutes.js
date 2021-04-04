const router = require('express').Router();
const { Workout } = require('../models');

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }])
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', async ({ body, params }, res) => {
    try {
        console.log(body);
        const workout = await Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body }},
            { new: true }
        )
        console.log(workout);
        res.json(workout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }])
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;