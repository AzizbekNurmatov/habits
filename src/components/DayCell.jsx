// DayCell component: Represents a single cell in the shared calendar grid
// Each cell represents one habit on one specific day
// Clicking toggles the completion status for that habit on that day
function DayCell({ isCompleted, onToggle }) {
  return (
    <td className="day-cell-container">
      <button
        className={`day-cell ${isCompleted ? 'completed' : ''}`}
        onClick={onToggle}
        aria-label={isCompleted ? 'Completed' : 'Not completed'}
      >
        {isCompleted ? 'X' : ''}
      </button>
    </td>
  );
}

export default DayCell;

