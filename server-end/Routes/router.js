const express =require('express')
const router =new express.Router()
const bookcontroller =require('../controllers/bookcontroller');
const customercontroller =require('../controllers/customercontroller')
const admincontroller =require('../controllers/admincontroller')


// user register routing 
router.post("/register",customercontroller.register)

// userlogin
router.post("/login",customercontroller.login )

// Admin register routing 
router.post("/Adminregister",admincontroller.register)

// Adminlogin
router.post("/Adminlogin",admincontroller.login )

// create book
router.post("/createbook",bookcontroller.createbook )

// edit book
router.post("/editbook/:_id",bookcontroller.createbook )

// getall book
router.get("/getallbooks",bookcontroller.getallbooks)

// delete book
router.delete("/deletebook/:_id",bookcontroller.deletebook)

module.exports=router