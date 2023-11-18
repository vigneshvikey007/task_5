const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

let workouts = [];

app.get('/workouts', (req, res) => {
  res.json(workouts);
});

app.post('/workouts', (req, res) => {
  const { exercise, duration, date } = req.body;
  const newWorkout = { exercise, duration, date };
  workouts.push(newWorkout);
  res.json(newWorkout);
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});