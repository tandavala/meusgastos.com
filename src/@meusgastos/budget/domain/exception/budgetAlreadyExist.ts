export class BudgetAlreadyExist extends Error {
  private constructor(uuid: string) {
    super(`Budget with "${uuid}" already exist`);
  }

  public static withIdOf(uuid: string) {
    return new BudgetAlreadyExist(uuid);
  }
}
