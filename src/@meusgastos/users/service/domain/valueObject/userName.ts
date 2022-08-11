import { ValueObject } from "../../../../@shared/domain/common/valueObject";
import { InvalidArgumentException } from "../../../../@shared/domain/exception/invalidArgumentException";

export class UserName extends ValueObject {
  private _userName: string;
  private constructor(userName: string) {
    super();
    this.setUserName(userName);
  }

  private setUserName(userName: string) {
    this.assertNotEmpty(userName);
  }

  public static pick(userName: string) {
    return new UserName(userName);
  }

  private assertNotEmpty(userName: string) {
    if (!userName) throw new InvalidArgumentException("Username is required");
    this._userName = userName;
  }

  public __toString() {
    return this._userName;
  }
}
