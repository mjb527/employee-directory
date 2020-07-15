// get employee data to insert into table
import Employee from '../../models/Employee';
import * as mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

// get all collections
Employee.findAll()
.then(employees => {
  return employees;
})
.catch(({ message }) => {
  console.log(message);
});

// get all documents with match in any field
// use *<value>* to find any match like the value in a field
//
