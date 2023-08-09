const e = require('express');
const pool =require('../../db');
const queries=require('./queries');
const getStudents =(req,res) => {
    pool.query(queries.getStudents,(error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
const getStudentbyid =(req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentbyid,[id],(error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent=(req,res) => {
    const { name, email, age, dob } =req.body; // javascript destructuring
    // check if email exists
    pool.query(queries.checkEmailExists,[email],(error,results) => {
        if(results.rows.length) 
        {
            res.send("Email already exists.");
        }
        // add students to database
        pool.query(queries.addStudent,[name,email,age,dob], (error,results) => {
            if(error) throw error;
            res.status(201).send("Student created Successfully");
        })
    });
};

const removeStudent= (req,res) => {
    const id=parseInt(req.params.id);
    pool.query(queries.getStudentbyid,[id],(error,results) =>
    {
        const nostudentfound =!results.rows.length;
        if(nostudentfound)
        {
        res.send("Student does not exist in the database")
        }
        pool.query(queries.removeStudent,[id],(error,results) =>
        {
            if(error) throw error;
            res.status(200).send("Student removed successfullY!");
        });
    }); 
};

const updateStudent =(req,res) => {
    const id =parseInt(req.params.id);
    const {name} = req.body;
    pool.query(queries.getStudentbyid,[id],(error,results) =>
    {
        const nostudentfound =!results.rows.length;
        if(nostudentfound)
        {
        res.send("Student does not exist in the database");
        }
        pool.query(queries.updateStudent,[name,id],(error,results) =>
        {
            if(error) throw error;
            res.status(200).send("Student updated successfully");
        });
    });
};
module.exports={
    getStudents,
    getStudentbyid,
    addStudent,
    removeStudent,
    updateStudent,
};

