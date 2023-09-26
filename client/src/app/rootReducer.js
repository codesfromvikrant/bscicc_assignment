import { combineReducers } from '@reduxjs/toolkit';
import studentsReducer from "../features/studentsSlice";
import viewReducer from '../features/viewSlice';

const rootReducer = combineReducers({
  students: studentsReducer,
  view: viewReducer,
});

export default rootReducer;