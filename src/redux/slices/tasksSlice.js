import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  selectedTask: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },

    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    updateTask: (state, action) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = {
          ...state.tasks[index],
          ...action.payload,
        };
      }
      state.selectedTask = null; 
    },

    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export default tasksSlice.reducer;

export const {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  updateTask,
  setSelectedTask,
} = tasksSlice.actions;
