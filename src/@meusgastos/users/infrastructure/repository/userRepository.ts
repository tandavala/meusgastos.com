import Database from "../../../../framework/database/config/knex";
import { User } from "../../domain/entity/user";
import { EmailAddress } from "../../domain/valueObject/emailAddress";
import { UserId } from "../../domain/valueObject/userId";
import { UserName } from "../../domain/valueObject/userName";

export class UserRepository {
  async ofId(userId: UserId): Promise<User> {
    const data = await Database("users")
      .where("uuid", userId.toString())
      .where("is_deleted", 0)
      .first();
    if (data) {
      return this.hidrateUser(
        data?.uuid,
        data?.user_name,
        data?.email,
        data?.is_deleted
      );
    }
    return;
  }

  async findToRestore(userId: UserId): Promise<User> {
    const data = await Database("users")
      .where("uuid", userId.toString())
      .first();
    if (data) {
      console.log(data);
      return this.hidrateUser(
        data?.uuid,
        data?.user_name,
        data?.email,
        data?.is_deleted
      );
    }
    return;
  }
  async ofUserName(userName: UserName): Promise<User> {
    const data = await Database("users")
      .where("user_name", userName.__toString())
      .first();
    return this.hidrateUser(
      data.uuid,
      data.user_name,
      data.email,
      data.is_deleted
    );
  }
  async save(user: User): Promise<User> {
    await Database("users").insert({
      uuid: user.getId(),
      user_name: user.getUserName(),
      email: user.getEmailAddress(),
    });
    return user;
  }

  async update(user: User): Promise<User> {
    const data = await Database("users").where("uuid", user.getId()).update({
      user_name: user.getUserName(),
      email: user.getEmailAddress(),
      is_deleted: user.getIsDeleted(),
    });
    return user;
  }

  private hidrateUser(
    uuid: string,
    userName: string,
    email: string,
    isDeleted: boolean
  ) {
    return User.create(
      UserId.fromString(uuid),
      UserName.pick(userName),
      EmailAddress.pick(email),
      isDeleted
    );
  }
}
