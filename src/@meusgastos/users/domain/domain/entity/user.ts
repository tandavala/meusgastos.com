import verify from "../../../../@shared/domain/verification/verify";
import { TriggerEvents } from "../../../../@shared/infrastructure/event/triggerEvent";
import { EmailAddress } from "../valueObject/emailAddress";
import { UserId } from "../valueObject/userId";
import { UserName } from "../valueObject/userName";

export class User extends TriggerEvents {
  private _uuid: string;
  public _userName: string;
  public _email: string;

  constructor(uuid: string, userName: string, email: string) {
    super();
    verify("Id", uuid);
    verify("Username", userName);
    verify("Email", email);

    this._uuid = uuid;
    this._userName = userName;
    this._email = email;
  }

  public static create(
    uuid: UserId,
    userName: UserName,
    emailAddress: EmailAddress
  ) {
    return new User(
      uuid.toString(),
      userName.__toString(),
      emailAddress.__toString()
    );
  }

  public getId() {
    return this._uuid;
  }

  public setId(uuid: string): UserId {
    verify("Id", uuid);
    return UserId.fromString(uuid);
  }

  public setUserName(userName: string): UserName {
    verify("Username", userName);
    return UserName.pick(userName);
  }

  public getUserName() {
    return this._userName;
  }

  public setEmailAddress(emailAddress: string): EmailAddress {
    verify("Email", emailAddress);
    return EmailAddress.pick(emailAddress);
  }

  public getEmailAddress() {
    return this._email;
  }
}
