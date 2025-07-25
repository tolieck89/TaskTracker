import { createStore, combineReducers } from 'redux';
import {taskReducer} from './reducers/tasksReducer'

const rootReducer = combineReducers({
  tasksState: taskReducer,
});

const store = createStore(rootReducer);

export default store;
