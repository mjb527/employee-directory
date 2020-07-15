// Employee schema
// database: employee_db
// collection: employees

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Employee needs a name"
  },
  position: {
    type: String,
    trim: true,
    required: "What is the employee's position?"
  },
  department: {
    type: String,
    trim: true,
    required: "What is the emplyee's department?"
  },
  hire_date: {
    type: Date,
    default: Date.now
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
