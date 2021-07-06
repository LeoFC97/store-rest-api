interface Validator {
  validate<T>(data: unknown): Promise<T>;
}

export default Validator;
