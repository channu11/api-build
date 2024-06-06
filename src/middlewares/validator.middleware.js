const bodyValidator = (schema)=>{
  return async(req, res, next)=>{
   try{
        const  data = req.body;
        if(req.file){
          // for single upload
          data[req.file.fieldname]= req.file.filename
        }
          await schema.validateAsync(data, {abortEarly:false});
         // success
         next()
         

    } catch(exception){
     detail = {};
    exception.details.map((error)=>{
      detail[error.context.lable] = error.message
    })
    next({status:422, message:"Validation Failed", detail:detail})
      //  console.log(exception)
     }
  }
}


const validateBody =  async(schema)=>{
  try{
    const data = req.body;
    if(req,file){
      //for single upload
      data[req.file.field]=req.file.filename
    }
    const response = await schema.validateAsync(data, {abortEarly: false});
    //success
    return response
  }catch(exception){
    // handling
  } // throw exce
}

module.exports = {
  bodyValidator,validateBody
}