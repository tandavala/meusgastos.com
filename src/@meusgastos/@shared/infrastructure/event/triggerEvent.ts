import IDomainEvent from "../../domain/event/domainEvent";

export class TriggerEvents {
  private _domainEvents: any[] = [];

  public domainEvents(): any[] {
    return this._domainEvents;
  }

  public notifyDomainEvent(domainEvent: IDomainEvent) {
    this._domainEvents.push(domainEvent);
  }

  public retriveAndFlushDomainEvents(): any[] {
    const events = this.domainEvents();
    this.resetDomainEvent();
    return events;
  }

  private resetDomainEvent() {
    this._domainEvents = [];
  }
}
