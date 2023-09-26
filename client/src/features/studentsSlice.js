import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  filteredStudentsList: [],
  studentID: '',
  profileImages: []
}

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setStudentID: (state, action) => {
      state.studentID = action.payload;
    },
    setFilteredStudentsList: (state, action) => {
      state.filteredStudentsList = action.payload;
    },
    setProfileImages: (state, action) => {
      state.profileImages = action.payload;
    }
  }
});

export const { setStudents, setStudentID, setFilteredStudentsList, setProfileImages } = studentsSlice.actions;

export default studentsSlice.reducer;

