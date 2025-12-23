import { useState } from 'react';
import DayBox from './DayBox';

// Habit component: Displays one habit and its 30-day tracking grid
// Each habit maintains its own state for which days are completed
function Habit({ name, onDelete }) {
  // Initialize state: array of 30 booleans, all false (not completed)
  const [completedDays, setCompletedDays] = useState(
    Array(30).fill(false)
  );

  // Toggle function: when a day is clicked, flip its completion status
  const toggleDay = (dayIndex) => {
    setCompletedDays((prev) => {
      const newDays = [...prev]; // Create a copy of the array
      newDays[dayIndex] = !newDays[dayIndex]; // Toggle the specific day
      return newDays; // Return the new array (React will re-render)
    });
  };

  return (
    <div className="habit">
      <div className="habit-header">
        <h2>{name}</h2>
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
      <div className="days-grid">
        {completedDays.map((isCompleted, index) => (
          <DayBox
            key={index}
            isCompleted={isCompleted}
            onToggle={() => toggleDay(index)}
            dayNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Habit;

