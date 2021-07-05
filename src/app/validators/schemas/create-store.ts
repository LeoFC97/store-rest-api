import Joi from 'joi';

const createStoreSchema = Joi.object({
  name: Joi.string().label('name').required(),
  pictureUrL: Joi.string().label('pictureUrL').required(),
  address: Joi.object({
    cep: Joi.string().label('cep').required(),
    street: Joi.string().label('cep').required(),
    number: Joi.number().label('number').required(),
    complement: Joi.string().label('address.complement').required(),
  }).label('address').required(),
}).required();

export default createStoreSchema;
