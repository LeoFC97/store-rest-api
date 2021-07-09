import Joi from 'joi';

const paramStoreIdSchema = Joi.object({
  storeId: Joi.string()
    .required()
    .label('store.id'),
}).required();

export default paramStoreIdSchema;
