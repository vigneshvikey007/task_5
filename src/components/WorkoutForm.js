import React, { useState } from 'react';

const WorkoutForm = ({ addWorkout }) => {
  const [workout, setWorkout] = useState({
    name: '',
    duration: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(workout);
    setWorkout({
      name: '',
      duration: '',
      date: '',
      time: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
    <br></br><label htmlFor="name"><b>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b></label>
      <input
        type="text"
        name="name"
        placeholder="Workout Name"
        value={workout.name}
        onChange={handleChange}/><br></br><br></br>
       <label htmlFor="name">Duration  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input
        type="text"
        name="duration"
        placeholder="Duration"
        value={workout.duration}
        onChange={handleChange}
      /><br></br><br></br><label htmlFor="name">Date   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</label>
      <input
        type="date"
        name="date"
        value={workout.date}
        onChange={handleChange}
      /><br></br><br></br><label htmlFor="name">Time(24 hrs)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input
        type="time"
        name="time"
        value={workout.time}
        onChange={handleChange}
      /><br></br><br></br><br></br>
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
