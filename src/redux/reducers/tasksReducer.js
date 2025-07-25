import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETE,
  SET_SELECTED_TASK, UPDATE_TASK,
} from "../actions/tasksActions";

const initialState = {
  tasks: [],
  selectedTask: null,
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };
      case UPDATE_TASK:
  return {
    ...state,
    tasks: state.tasks.map((t) =>
      t.id === action.payload.id ? { ...t, ...action.payload } : t
    ),
    selectedTask: null, 
  };


    default:
      return state;
  }
};
