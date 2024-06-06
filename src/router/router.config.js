//import {router} from "express" (import method ex6)
const router = require("express").Router();
const userRouter= require("../modules/user/user.router")
const bannerRouter= require("../modules/banner/banner.router")


//user[/*]
//mount:-
router.use("/user",userRouter);
router.use("/banner", bannerRouter)
//endpoint
//api, url
// Request
// login
//login => endpoint
// routing


// facebook.com/value
//parameterizes routesrouter
//Post:-


  
  router.use("/home", (request, response) =>{  //:-first argiment ("/") , second argument:-(request, response) 
       // response.send("Normal Text")
       //response.end("Normal Text ")
       // response.sendFile("./path of your file")
       //response.sendStatus(404) //response code
       // response.status()  //response end
       //response.render()
       response.json({
        result:"data.any type",
        message:"Home data fetched",
        meta:null // null,array,object
       })
  })
  // app.get("/url")  //read operation
  // app.post() //create operation
  // app.put() //
  // app.patch() // update operation
  // app.delete()  //Delete operation
  
  
  
  
  
  router.get("/user/:id/:username", (req, res)=>{
    //params
    const params = req.params;  //object data type
    
    res.json({
      result:{
        params: params,
      
      },
      message: "User Detail with username",
      meta: null
    })
  })


 module.exports = router