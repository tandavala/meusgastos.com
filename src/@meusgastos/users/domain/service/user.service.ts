import { DomainExecption } from "../../../@shared/domain/exception/domainException";
import { UserRepository } from "../../infrastructure/repository/userRepository";
import { User } from "../domain/entity/user";
import { EmailAddress } from "../domain/valueObject/emailAddress";
import { UserId } from "../domain/valueObject/userId";
import { UserName } from "../domain/valueObject/userName";
import { SignUpCommand } from "./signUpCommand";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async execute(command: SignUpCommand) {
    const id = UserId.nextIdentity();

    const user = User.create(
      UserId.fromString(id.toString()),
      UserName.pick(command.userName),
      EmailAddress.pick(command.emailAddress)
    );

    await this.checkAccountAlreadyExist(id.toString(), user.getUserName());
    return await this.userRepository.save(user);
  }

  async checkAccountAlreadyExist(id: string, userName: string) {
    const accountById = await this.userRepository.ofId(UserId.fromString(id));
    const accountByName = await this.userRepository.ofUserName(
      UserName.pick(userName)
    );

    if (accountById) throw new DomainExecption("Id already in use");
    if (accountByName) throw new DomainExecption("User Name already in use");
    return false;
  }
}
