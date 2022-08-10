import { User } from "../domain/entity/user";
import { UserId } from "../domain/valueObject/userId";
import { UserName } from "../domain/valueObject/userName";

export interface IUserRepository {
  ofId(userId: UserId): Promise<User>;
  ofUserName(userName: UserName): Promise<User>;
  save(user: User): Promise<User>;
  update(user: User): Promise<User>;
}
