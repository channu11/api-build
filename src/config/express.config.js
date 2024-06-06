const express = require("express");  //import express from "express"

const router = require("../router/router.config")
const app = express();


// body parsers:-
 app.use(express.json())
 app.use(express.urlencoded({
    extended:true
 }))

// router mount
 app.use(router);

app.use((req,res,next)=>{
  //404
  next({status: 404, message:"resource not found."})
})

// error handler middleware:-
// error {status:401, message:"Please login first"}
 app.use((error,req,res,next)=>{
  let status = error.status||500
  let message = error.message || "Server error...."
  let result = error.detail || null;

  // TO DO Status:-
  res.status(status).json({
    result:result,
    meta:null,
    message:message
  })
 });

module.exports = app;
//export default app;