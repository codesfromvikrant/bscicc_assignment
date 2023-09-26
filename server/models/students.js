const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  profileImage: {
    type: String,
    default: null,
  },
  personalData: {
    type: Object,
    default: {
      profileImage: null,
      firstname: '',
      lastname: '',
      phonenumber: '',
      emailid: '',
      dateofbirth: '',
      address: '',
    },
  },

  education: {
    type: Object,
    default: {},
  },

  certification: {
    type: Array,
    default: [],
  },

});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;