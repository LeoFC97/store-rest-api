import Joi from 'joi';

const createProductSchema = Joi.object({
  name: Joi.string().label('name').required(),
  category: Joi.string().label('category').required(),
  price: Joi.number().label('price').required(),
  pictureUrL: Joi.string().label('pictureUrL').required(),
}).required();

export default createProductSchema;
