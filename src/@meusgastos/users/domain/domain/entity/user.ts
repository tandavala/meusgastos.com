import verify from "../../../../@shared/domain/verification/verify";
import { TriggerEvents } from "../../../../@shared/infrastructure/event/triggerEvent";
import { CreateUserEvent } from "../event/createCreateEvent";
import { EmailAddress } from "../valueObject/emailAddress";
import { UserId } from "../valueObject/userId";
import { UserName } from "../valueObject/userName";

export class User extends TriggerEvents {
  private _uuid: string;
  public _userName: string;
  public _email: string;
  public _isDeleted: boolean;

  constructor(
    uuid: string,
    userName: string,
    email: string,
    isDeleted = false
  ) {
    super();
    this.setId(uuid);
    this.setUserName(userName);
    this.setEmailAddress(email);

    this.notifyDomainEvent(this.buildNewUserDomainEvent());
  }

  public static create(
    uuid: UserId,
    userName: UserName,
    emailAddress: EmailAddress,
    isDeleted = false
  ) {
    return new User(
      uuid.toString(),
      userName.__toString(),
      emailAddress.__toString(),
      isDeleted
    );
  }

  protected buildNewUserDomainEvent(): CreateUserEvent {
    return CreateUserEvent.fromUser(this);
  }

  public getId() {
    return this._uuid;
  }

  public setId(uuid: string): void {
    verify("Id", uuid);
    const id = UserId.fromString(uuid);
    this._uuid = id.toString();
  }

  public setUserName(userName: string): void {
    verify("Username", userName);
    const name = UserName.pick(userName);
    this._userName = name.__toString();
  }

  public getUserName() {
    return this._userName;
  }

  public setEmailAddress(emailAddress: string): void {
    verify("Email", emailAddress);
    const email = EmailAddress.pick(emailAddress);
    this._email = email.__toString();
  }

  public getEmailAddress() {
    return this._email;
  }

  public getIsDeleted() {
    return this._isDeleted;
  }

  public softDeleteUser() {
    this._isDeleted = true;
  }

  public restoreAccount() {
    this._isDeleted = false;
  }
}
