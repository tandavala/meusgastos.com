import { v4 as uuid, validate } from "uuid";
import { InvalidArgumentException } from "../exception/invalidArgumentException";
import { ValueObject } from "./valueObject";

export class UuidBaseIdentity extends ValueObject {
  private _uuid: string;
  private constructor(private uuid: string) {
    super();
    this._uuid = uuid;
  }
  public static fromString(uuid: string) {
    if (!validate(uuid)) {
      throw new InvalidArgumentException(
        "The value does not represent a valid identifier"
      );
    }
    return new UuidBaseIdentity(uuid);
  }

  public static nextIdentity() {
    return new UuidBaseIdentity(uuid());
  }

  public static fromUuid(uuid: string) {
    return new UuidBaseIdentity(uuid);
  }

  public equals(other: UuidBaseIdentity): boolean {
    return this._uuid === other.id;
  }

  public toString() {
    return this._uuid;
  }

  get id() {
    return this._uuid;
  }
}
