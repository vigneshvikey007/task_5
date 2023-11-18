const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/workout_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create Workout and Exercise schemas
const ExerciseSchema = new mongoose.Schema({
  name: String,
  // Add more exercise properties here
});

const WorkoutSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  exercises: [ExerciseSchema],
  // Other workout properties can be added here
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);
const Workout = mongoose.model('Workout', WorkoutSchema);

app.use(bodyParser.json());

// Create a new workout
app.post('/workouts', async (req, res) => {
  try {
    const { date, exercises } = req.body;
    const newWorkout = new Workout({ date, exercises });
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all workouts
app.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific workout by ID
app.get('/workouts/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json(workout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a workout by ID
app.put('/workouts/:id', async (req, res) => {
  try {
    const { date, exercises } = req.body;
    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      { date, exercises },
      { new: true }
    );
    if (!updatedWorkout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json(updatedWorkout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a workout by ID
app.delete('/workouts/:id', async (req, res) => {
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
    if (!deletedWorkout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json({ message: 'Workout deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

