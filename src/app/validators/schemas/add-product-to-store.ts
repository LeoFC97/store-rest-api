import Joi from 'joi';

const addProductToStoreSchema = Joi.object({
  productId: Joi.string().label('productId').required(),
  storeId: Joi.string().label('storeId').required(),
}).required();

export default addProductToStoreSchema;
