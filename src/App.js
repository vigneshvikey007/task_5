import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/workouts');
      setWorkouts(response.data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  const addWorkout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/workouts', {
        exercise,
        duration,
        date,
      });
      setWorkouts([...workouts, response.data]);
      setExercise('');
      setDuration('');
      setDate('');
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };

  return (
    <div>
      <h1>Workout Tracker</h1>
      <div>
        <label>Exercise:</label>
        <input type="text" value={exercise} onChange={(e) => setExercise(e.target.value)} />
      </div>
      <div>
        <label>Duration (minutes):</label>
        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button onClick={addWorkout}>Add Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise} - {workout.duration} minutes - {workout.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
