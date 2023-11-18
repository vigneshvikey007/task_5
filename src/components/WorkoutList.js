import React from 'react';

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      <h2>Workout List</h2>
      <p><b>Workout name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time(24 hrs)</b></p>
      <ul>
        {workouts.map((workout, index) => (
          <li>
            {workout.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{workout.duration} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {workout.date} &nbsp;&nbsp;&nbsp;&nbsp; {workout.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
