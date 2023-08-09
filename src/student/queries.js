const getStudents = "Select * from students";
const getStudentbyid= "Select * from students where id =$1"; //$1 parameter
const checkEmailExists="Select s from students s where s.email=$1";
const addStudent="Insert into students (name,email,age, dob) values ($1,$2,$3,$4)";
const removeStudent="Delete from students where id=$1";
const updateStudent="UPDATE students SET name=$1 where id=$2";

module.exports ={
    getStudents,
    getStudentbyid,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,
};