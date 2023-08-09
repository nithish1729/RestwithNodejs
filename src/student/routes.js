const {Router} = require('express');
const controller = require('./controller');

const router =Router();
router.get("/", controller.getStudents);
router.post("/",controller.addStudent);
router.get("/:id",controller.getStudentbyid);
router.put("/:id",controller.updateStudent);
router.delete("/:id",controller.removeStudent);
module.exports= router;
