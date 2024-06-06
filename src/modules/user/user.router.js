// MiddleWare:-

const userRouter = require("express").Router()
const userCtrl = require("../user/user.controller")

const checklogin = require("../../middlewares/auth.middleware");
const allowUser = require("../../middlewares/rbac.middleware");
const { setPath, uploader } = require("../../middlewares/uploader.middleware");
const { bodyValidator } = require("../../middlewares/validator.middleware");
const { UserCreateDto} = require("./user.request");

  



//Post:-
// userRouter.use(checklogin)

userRouter.route("/")
// for multiple file upload:- uploader.array('image')
// forsingle file :- uploader.single('image')
  .post(checklogin,allowUser,setPath('/user'),uploader.single('image'),bodyValidator(UserCreateDto), userCtrl.userCreate)
   // Get:-
   .get(userCtrl.ListAllUsers)
 
userRouter.route("/:id")
   // Get:-
  .get(userCtrl.getDetailById)
   //Update
   // Put or Patch :-
  .put(userCtrl.updateUserById)
  //Delete:-
   .delete(userCtrl.deletUserById)
   
  
  
 
  
  // router.get("/user/:id", (req, res)=>{
  //   //params
  //   const params = req.params;  //object data type
    
  //   res.json({
  //     result:{
  //       params: params,
      
  //     },
  //     message: "User Detail with username",
  //     meta: null
  //   })
  // })

  module.exports= userRouter;