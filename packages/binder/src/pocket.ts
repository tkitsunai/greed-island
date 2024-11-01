import { Card } from "@greedisland/card/src/card";

export interface Pocket {}

export class SpecifiedPocket implements Pocket {
  constructor(private readonly card?: Card) {}

  setCard() {
    throw new Error("Method not implemented.");
  }

  removeCard() {
    throw new Error("Method not implemented.");
  }
}

export class FreePocket implements Pocket {
  constructor() {}
}
