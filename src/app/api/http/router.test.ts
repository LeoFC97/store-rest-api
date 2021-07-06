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
});
