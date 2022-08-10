import IDomainEvent from "./domainEvent";

export interface EventBus {
  notity(domainEvent: IDomainEvent): void;
  notifyAll(domainEvents: IDomainEvent[]): void;
}
