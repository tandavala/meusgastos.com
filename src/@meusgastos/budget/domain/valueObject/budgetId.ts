import { UuidBaseIdentity } from "../../../@shared/domain/common/uuidBaseIdentity";
import { v4 as uuid } from "uuid";

export class BudgetId extends UuidBaseIdentity {
  constructor() {
    super();
  }
}
