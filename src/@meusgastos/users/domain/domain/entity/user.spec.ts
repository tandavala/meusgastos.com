import { EmailAddress } from "../valueObject/emailAddress";
import { UserId } from "../valueObject/userId";
import { UserName } from "../valueObject/userName";
import { User } from "./user";
import { v4 as uuid } from "uuid";

describe("User unit test", () => {
  it("should throw error if Id is invalid", () => {
    expect(() => {
      const user = User.create(
        UserId.fromString(""),
        UserName.pick("tandavala"),
        EmailAddress.pick("jose.tandavala@gmail.com")
      );
    }).toThrowError("The value does not represent a valid identifier");
  });

  it("should throw error if UserName is empty", () => {
    expect(() => {
      const user = User.create(
        UserId.fromString(uuid()),
        UserName.pick(""),
        EmailAddress.pick("jose.tandavala@gmail.com")
      );
    }).toThrowError("Username is required");
  });

  it("should throw error if email is empty", () => {
    expect(() => {
      const user = User.create(
        UserId.fromString(uuid()),
        UserName.pick("tandavala"),
        EmailAddress.pick("")
      );
    }).toThrowError("Email is required");
  });

  it("should create a user", () => {
    const id = uuid();
    const user = User.create(
      UserId.fromUuid(id),
      UserName.pick("tandavala"),
      EmailAddress.pick("jose.tandavala@gmail.com")
    );

    expect(user.getId()).toBe(id);
    expect(user.getUserName()).toBe("tandavala");
    expect(user.getEmailAddress()).toBe("jose.tandavala@gmail.com");
  });

  it("should create domain event", () => {
    const user = User.create(
      UserId.fromString(uuid()),
      UserName.pick("tandavala"),
      EmailAddress.pick("jose.tandavala@gmail.com")
    );

    const events = user.retriveAndFlushDomainEvents();

    expect(events.length).toBe(1);
  });
});
