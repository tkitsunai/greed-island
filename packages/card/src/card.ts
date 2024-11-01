export interface Card {
  readonly cardNumber: CardNumber;
}

export class CardNumber {
  constructor(public readonly value: number) {}
}

export class SpecifiedCard implements Card {
  constructor(readonly cardNumber: CardNumber) {}
}
