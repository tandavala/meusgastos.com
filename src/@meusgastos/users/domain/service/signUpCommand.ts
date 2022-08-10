export class SignUpCommand {
  private _userName: string;
  private _email: string;

  constructor(requestBody: any) {
    this._userName = requestBody.userName;
    this._email = requestBody.email;
  }

  get userName() {
    return this._userName;
  }

  get emailAddress() {
    return this._email;
  }
}
