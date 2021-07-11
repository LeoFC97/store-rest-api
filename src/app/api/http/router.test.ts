import router from './router';

describe('Check if all endpoints are declarated', () => {
  test('Should exist path /health', async () => {
    const pathToBeTested = '/health';
    const healthEnpoint = router.stack.find((endpoint) => endpoint.route.path === pathToBeTested);
    expect(healthEnpoint).toBeDefined();
  });
  test('Should exists method GET on /health', async () => {
    const pathToBeTested = '/health';
    const healthMethod = router.stack.some((endpoint) => endpoint.route.path === pathToBeTested
      && endpoint.route.methods.get);
    expect(healthMethod).toBeTruthy();
  });
  test('Should exist path /store', async () => {
    const pathToBeTested = '/store';
    const healthEnpoint = router.stack.find((endpoint) => endpoint.route.path === pathToBeTested);
    expect(healthEnpoint).toBeDefined();
  });
  test('Should exists method POST on /store', async () => {
    const pathToBeTested = '/store';
    const healthMethod = router.stack.some((endpoint) => endpoint.route.path === pathToBeTested
      && endpoint.route.methods.post);
    expect(healthMethod).toBeTruthy();
  });
  test('Should exist path /stores', async () => {
    const pathToBeTested = '/stores';
    const healthEnpoint = router.stack.find((endpoint) => endpoint.route.path === pathToBeTested);
    expect(healthEnpoint).toBeDefined();
  });
  test('Should exists method GET on /stores', async () => {
    const pathToBeTested = '/stores';
    const healthMethod = router.stack.some((endpoint) => endpoint.route.path === pathToBeTested
      && endpoint.route.methods.get);
    expect(healthMethod).toBeTruthy();
  });
  test('Should exist path /store/:storeId', async () => {
    const pathToBeTested = '/store/:storeId';
    const healthEnpoint = router.stack.find((endpoint) => endpoint.route.path === pathToBeTested);
    expect(healthEnpoint).toBeDefined();
  });
  test('Should exists method DELETE on /store/:storeId', async () => {
    const pathToBeTested = '/store/:storeId';
    const healthMethod = router.stack.some((endpoint) => endpoint.route.path === pathToBeTested
      && endpoint.route.methods.delete);
    expect(healthMethod).toBeTruthy();
  });
  test('Should exists method GET on /store/:storeId', async () => {
    const pathToBeTested = '/store/:storeId';
    const healthMethod = router.stack.some((endpoint) => endpoint.route.path === pathToBeTested
      && endpoint.route.methods.get);
    expect(healthMethod).toBeTruthy();
  });
});
