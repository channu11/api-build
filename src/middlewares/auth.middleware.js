
// midddleware (next):-
const checklogin= (req, res, next)=>{
  // check
 console.log("I am here")
 next()//next middleware
  // next({status:401, message:"Please login first"})
}

module.exports = checklogin;