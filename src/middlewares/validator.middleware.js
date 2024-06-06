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
    // handling
    
     }
  }
}

module.exports = {
  bodyValidator
}