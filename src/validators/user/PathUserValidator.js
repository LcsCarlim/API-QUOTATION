const Joi = require('joi');

module.exports = async body => {
  const schema = Joi.object({
    password: Joi.string()
      .required()
      .min(8)
  });
  try {
    return await schema.validateAsync(body);
  } catch (error) {
    return error;
  }
};
