class BannersController{
    //easy for the understand codes For comments ( /** */)   Or (Js documentation comment) documentation
  /**
   * This  function create as a banner in our database.
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   * 
   */
 bannerCreate = (req, res, next) =>{

  // loggedin user
       //admin user
  // api payload receive
      // email => email should be unique
  // validation
      // invalid
        //response => validation faild
     // validate   
  // Manipulation
       // name => fullName
       // mapping
       // password => admin123  => encrypt
       
   //Database Operate
      //connect
      // select 
      //query execute
  
   //email / notification   
  
const data = req.body;

    res.json({
      result:data,
      messege: "Banner Create",
      meta : null
        
      
    })
  }

  ListAllBanners = ((req, res,next)=>{
    // code to fetch data/users from db
    res.json({
         result: [],
         meta: null,
         message: "All banner List "
    })
  })
  getDetailById = ( (req, res,next)=>{
    //params
    const params = req.params;  //object data type
    const query = req.query; //object data type
    res.json({
      result:{
        params: params,
        query: query
      },
      message: "Banners Detail off "+params.id,
      meta: null
    })
  })

  updateBannersById = ((req, res,next)=>{
    //params
    const params = req.params;  //object data type
    
    res.json({
      result:{
        params: params,
      
      },
      message: "Banners Update",
      meta: null
    })
  })

  deletBannersById = ( (req, res,next)=>{
    //params
    const params = req.params;  //object data type
    
    res.json({
      result:{
        params: params,
      
      },
      message: "Banners Delete",
      meta: null
    })
  })

  


}
/**
 * userCtrl object is an instant of BannerController Class
 */
const bannerCtrl = new BannersController()
module.exports= bannerCtrl;