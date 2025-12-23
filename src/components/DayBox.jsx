// DayBox component: Represents a single day in the habit tracker grid
// This component displays one square that can be clicked to toggle completion
function DayBox({ isCompleted, onToggle, dayNumber }) {
  return (
    <button
      className={`day-box ${isCompleted ? 'completed' : ''}`}
      onClick={onToggle}
      aria-label={`Day ${dayNumber} - ${isCompleted ? 'Completed' : 'Not completed'}`}
    >
      {isCompleted ? 'X' : ''}
    </button>
  );
}

export default DayBox;

