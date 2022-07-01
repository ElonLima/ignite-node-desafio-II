import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyBeingUsed = this.usersRepository.findByEmail(email);

    if (emailAlreadyBeingUsed) {
      throw new Error("Mensagem do erro");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
