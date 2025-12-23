import DayCell from './DayCell';

// Calendar component: Renders a shared calendar grid for all habits
// Days (1-30) are rows on the left, habits are columns across the top
// Each cell represents completion for a specific (habit, day) combination
function Calendar({ habits, onToggleCell, onDeleteHabit }) {
  return (
    <div className="calendar-container">
      <table className="calendar-table">
        <thead>
          <tr>
            <th className="day-label-header">Day</th>
            {/* Render a column header for each habit */}
            {habits.map(habit => (
              <th key={habit.id} className="habit-header-cell">
                <div className="habit-header-content">
                  <span className="habit-name">{habit.name}</span>
                  <button 
                    className="delete-btn-small"
                    onClick={() => onDeleteHabit(habit.id)}
                    aria-label={`Delete ${habit.name}`}
                  >
                    ×
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Outer loop: Create one row for each day (1-30) */}
          {Array.from({ length: 30 }, (_, dayIndex) => (
            <tr key={dayIndex}>
              {/* Day label on the left */}
              <td className="day-label">{dayIndex + 1}</td>
              {/* Inner loop: Create one cell for each habit in this row */}
              {habits.map(habit => (
                <DayCell
                  key={`${habit.id}-${dayIndex}`}
                  isCompleted={habit.days[dayIndex]}
                  onToggle={() => onToggleCell(habit.id, dayIndex)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;

