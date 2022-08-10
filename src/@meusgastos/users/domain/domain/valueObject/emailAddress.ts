import { ValueObject } from "../../../../@shared/domain/common/valueObject";
import { InvalidArgumentException } from "../../../../@shared/domain/exception/invalidArgumentException";

export class EmailAddress extends ValueObject {
  private _emailAddress: string;

  private constructor(emailAddress: string) {
    super();
    this.setEmailAddress(emailAddress);
  }

  private setEmailAddress(emailAddress: string) {
    this.assertNotEmpty(emailAddress);
  }

  public static pick(emailAddress: string) {
    return new EmailAddress(emailAddress);
  }

  private assertNotEmpty(emailAddress: string) {
    //TODO: check if email is valid
    if (!emailAddress) throw new InvalidArgumentException("Email is required");
    this._emailAddress = emailAddress;
  }
  public __toString() {
    return this._emailAddress;
  }
}
