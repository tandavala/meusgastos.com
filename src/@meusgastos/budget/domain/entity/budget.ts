import { DomainExecption } from "../../../@shared/domain/exception/domainException";
import verify from "../../../@shared/domain/verification/verify";
import { TriggerEvents } from "../../../@shared/infrastructure/event/triggerEvent";

export class Budget extends TriggerEvents {
  private _uuid: string;
  private _owner: string;
  private _value: number;

  private constructor(uuid: string, owner: string, value: number) {
    super();
    verify("Id", uuid);
    verify("Owner", owner);
    verify("Value", value);
  }

  static create(uuid: string, owner: string, value: number) {
    return new Budget(uuid, owner, value);
  }

  get id() {
    return this._uuid;
  }
}
