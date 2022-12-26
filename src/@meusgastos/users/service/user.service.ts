import { DomainExecption } from "../../@shared/domain/exception/domainException";
import { User } from "../domain/entity/user";
import { EmailAddress } from "../domain/valueObject/emailAddress";
import { UserId } from "../domain/valueObject/userId";
import { UserName } from "../domain/valueObject/userName";
import { UserRepository } from "../infrastructure/repository/userRepository";
import { SignUpCommand } from "./signUpCommand";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async query() {
    return await this.userRepository.listAll();
  }

  async execute(command: SignUpCommand) {
    const id = UserId.nextIdentity();

    const user = User.create(
      UserId.fromString(id.toString()),
      UserName.pick(command.userName),
      EmailAddress.pick(command.emailAddress)
    );

    //  await this.checkAccountAlreadyExist(id.toString(), user.getUserName());
    return await this.userRepository.save(user);
  }

  async find(id: string) {
    const user = await this.userRepository.ofId(UserId.fromString(id));
    if (!user) throw new DomainExecption("User does not exist");
    user.retriveAndFlushDomainEvents();
    return user;
  }

  async update(id: string, command: SignUpCommand) {
    const user = User.create(
      UserId.fromString(id),
      UserName.pick(command.userName),
      EmailAddress.pick(command.emailAddress)
    );
    //TODO: check if user exist
    return await this.userRepository.update(user);
  }

  async softDelete(id: string) {
    const user = await this.userRepository.ofId(UserId.fromString(id));
    user.softDeleteUser();
    await this.userRepository.update(user);
    return user;
  }

  async restore(id: string) {
    const user = await this.userRepository.findToRestore(UserId.fromString(id));
    user.restoreAccount();
    await this.userRepository.update(user);
    return user;
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
