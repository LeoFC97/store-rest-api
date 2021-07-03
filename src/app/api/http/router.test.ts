import router from './router';

describe('Check if all endpoints are declarated', () => {
  test('Should exist path /health', async () => {
    const pathToBeTested = '/health';
    const healthEnpoint = router.stack.find((endpoint) => endpoint.route.path === pathToBeTested);
    expect(healthEnpoint).toBeDefined();
  });
});
