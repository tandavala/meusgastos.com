import IDomainEvent from "../../../../@shared/domain/event/domainEvent";
import verify from "../../../../@shared/domain/verification/verify";
import { User } from "../entity/user";

export class CreateUserEvent implements IDomainEvent {
  private _userId: string;
  private _occuradOn: Date;
  private _topic: string;

  private constructor(userId: string, occuredOn: Date, topic: string) {
    verify("Id", userId);
    verify("Topic", topic);
    this._userId = userId;
    this._topic = topic;
    this._occuradOn = occuredOn;
  }

  public static fromUser(user: User) {
    return new CreateUserEvent(user.getId(), new Date(), "UserCreated");
  }

  public getUserId(): string {
    return this._userId;
  }

  public getOccurateOn(): Date {
    return this._occuradOn;
  }
}
