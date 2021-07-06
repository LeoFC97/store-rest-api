import JwtTokenManager from './jwt-token-manager';
import TokenManager from '../../interfaces/http/token-manager';
import tokenWithUserAndEmail from '../../../test/mocks/jwt';

describe('Jwt token manager', () => {
  test('Return valid token', () => {
    const SystemUnderTesting: TokenManager = new JwtTokenManager();
    const returnOfSut: string = SystemUnderTesting.decode(tokenWithUserAndEmail);
    expect(returnOfSut).toStrictEqual({
      user: {
        email: 'mock@mock.com',
        fullName: 'mocked name',
      },
    });
  });
});
