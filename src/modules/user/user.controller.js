/**
 * USerController class is to handle all the business logic for user
 */

class UserController{
    //easy for the understand codes For comments ( /** */)   Or (Js documentation comment) documentation
  /**
   * This  function create as a user in our database.
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   * 
   */


  

    userCreate = async(req, res, next) =>{

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
    
    
    
      // mapping:-
    
      try{
           const data = req.body;
          //  console.log(req.file)//
            if(req.file){     // file Upload/ image handling:-
             data.image = req.file.filename
         }
    
         // Validation:-
    
             res.json({
               result:data,
               messege: "User Create",
               meta : null
            
          
             })
           

         } catch(exception){
           // handling
           next(exception)
       }
      }

  ListAllUsers = ((req, res,next)=>{
    // code to fetch data/users from db
    res.json({
         result: [],
         meta: null,
         message: "All User List "
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
      message: "User Detail off "+params.id,
      meta: null
    })
  })

  updateUserById = ((req, res,next)=>{
    //params
    const params = req.params;  //object data type
    
    res.json({
      result:{
        params: params,
      
      },
      message: "User Update",
      meta: null
    })
  })

  deletUserById = ( (req, res,next)=>{
    //params
    const params = req.params;  //object data type
    
    res.json({
      result:{
        params: params,
      
      },
      message: "User Delete",
      meta: null
    })
  })

  


}
/**
 * userCtrl object is an instant of UserController Class
 */
const userCtrl = new UserController()
module.exports= userCtrl;