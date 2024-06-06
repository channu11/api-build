
//rbac => role base access control :-

const allowUser= (req, res, next)=>{
  // permission check
  console.log("I am there")
  next() 
}
module.exports= allowUser;