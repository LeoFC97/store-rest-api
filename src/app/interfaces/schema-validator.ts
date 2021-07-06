interface SchemaValidator<Schema> {
  validate(data: unknown, schema: Schema): Promise<void>;
}

export default SchemaValidator;
