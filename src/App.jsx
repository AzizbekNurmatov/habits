import { useState } from 'react';
import Calendar from './components/Calendar';
import './App.css';

// App component: Main component that manages ALL state for habits and their completion data
// All state is "lifted" here so we can share one calendar grid across all habits
function App() {
  // State to store habits as objects with id, name, and days array (30 booleans)
  // Each habit has its own days array to track which days are completed
  const [habits, setHabits] = useState([]);
  // State to store the input value for adding a new habit
  const [inputValue, setInputValue] = useState('');
  // Counter to generate unique IDs for each habit
  const [nextId, setNextId] = useState(1);

  // Function to add a new habit to the list
  // Creates a new habit object with id, name, and 30 days (all false initially)
  const addHabit = () => {
    if (inputValue.trim() !== '') {
      const newHabit = {
        id: nextId,
        name: inputValue.trim(),
        days: Array(30).fill(false) // Initialize all 30 days as not completed
      };
      setHabits([...habits, newHabit]);
      setInputValue('');
      setNextId(nextId + 1);
    }
  };

  // Function to remove a habit from the list by its ID
  const deleteHabit = (habitId) => {
    setHabits(habits.filter(habit => habit.id !== habitId));
  };

  // Function to toggle a specific cell (habit + day combination)
  // This updates the completion status for a specific habit on a specific day
  const toggleCell = (habitId, dayIndex) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        // Create a new array with the toggled day
        const newDays = [...habit.days];
        newDays[dayIndex] = !newDays[dayIndex];
        return { ...habit, days: newDays };
      }
      return habit; // Return unchanged habit if it's not the one we're updating
    }));
  };

  // Handle Enter key press in the input field
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addHabit();
    }
  };

  return (
    <div className="app">
      <h1>Habit Tracker</h1>
      
      <div className="add-habit-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new habit (e.g., 'Exercise', 'Read')"
          className="habit-input"
        />
        <button onClick={addHabit} className="add-btn">
          Add Habit
        </button>
      </div>

      {habits.length === 0 ? (
        <p className="empty-message">
          No habits yet. Add one above to get started!
        </p>
      ) : (
        <Calendar 
          habits={habits} 
          onToggleCell={toggleCell}
          onDeleteHabit={deleteHabit}
        />
      )}
    </div>
  );
}

export default App;
