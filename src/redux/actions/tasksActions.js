export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const SET_SELECTED_TASK = 'SET_SELECTED_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTaskCompletion = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: id,
});

export const setSelectedTask = (task) => ({
  type: SET_SELECTED_TASK,
  payload: task,
});

export const UPDATE_TASK = 'UPDATE_TASK';

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});