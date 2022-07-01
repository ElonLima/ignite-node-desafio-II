import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User(name, email);
    this.users.push(newUser);
    return newUser;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    this.users.map((user) => {
      if (user.id === receivedUser.id) {
        // eslint-disable-next-line no-param-reassign
        receivedUser.admin = true;
        return receivedUser;
      }
      return user;
    });
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
