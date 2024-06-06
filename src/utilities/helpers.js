const randomString = (length)=>{
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const len = chars.length;
  let random = "";

  for(let i= 0; i<length; i++){
    //postn= position
      const postn =Math.ceil(Math.random()* (len-1));
      random+= chars[postn]
  }
  return random;
}
module.exports= {
  randomString
}




