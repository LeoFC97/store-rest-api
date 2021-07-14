import Joi from 'joi';

const RemoveProductFromStoreSchema = Joi.object({
  productId: Joi.string().label('productId').required(),
  storeId: Joi.string().label('storeId').required(),
}).required();

export default RemoveProductFromStoreSchema;
