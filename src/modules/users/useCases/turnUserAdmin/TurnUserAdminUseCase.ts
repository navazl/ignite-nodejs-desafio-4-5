import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const idAlreadyExists = this.usersRepository.findById(user_id);

    if (!idAlreadyExists) {
      throw new Error("Id doesn't exists!")
    }
    console.log(`\n\n${idAlreadyExists}\n\n`);
    this.usersRepository.turnAdmin(idAlreadyExists);

    return idAlreadyExists;
  }
}

export { TurnUserAdminUseCase };
