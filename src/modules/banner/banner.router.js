// MiddleWare:-

const bannerRouter = require("express").Router()
const bannerCtrl = require("../banner/banner.controller")

const checklogin = require("../../middlewares/auth.middleware");
const allowUser = require("../../middlewares/rbac.middleware");
const { setPath, uploader } = require("../../middlewares/uploader.middleware");

  



//Post:-
bannerRouter.use(checklogin)

bannerRouter.route("/")
// for multiple file upload:- uploader.array('image')
// forsingle file :- uploader.single('image')
  .post(allowUser,setPath('/user'),uploader.single('image'), bannerCtrl.bannerCreate)
   // Get:-
   .get(bannerCtrl.ListAllBanners)
 
bannerRouter.route("/:id")
   // Get:-
  .get(bannerCtrl.getDetailById)
   //Update
   // Put or Patch :-
  .put(bannerCtrl.updateBannersById)
  //Delete:-
   .delete(bannerCtrl.deletBannersById)
   
  
  
 
  
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

  module.exports= bannerRouter;