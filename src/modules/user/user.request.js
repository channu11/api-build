const Joi = require("joi")


const UserCreateDto = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password:Joi.string().min(8).max(25).required(),
  confirmPassword:Joi.string().equal(Joi.ref('password')).required(),
  address: Joi.string().empty().optional(),
  phone: Joi.string().min(10).max(12),
   image: Joi.string().optional()
 // image: Joi.object().optional()  // {}, ""
})

module.exports = {
  UserCreateDto
}