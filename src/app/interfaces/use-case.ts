import User from './user/user';

abstract class UseCase {
  abstract execute(input?: unknown, user?: User): Promise<any>;
}

export default UseCase;
