import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isAdmin = this.usersRepository.findById(user_id);

    if (!isAdmin) throw new Error("Mensagem do erro");
    if (!isAdmin?.admin) throw new Error("Mensagem do erro");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
