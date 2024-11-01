export class PocketNo {
  constructor(private readonly value: number) {
    if (value < 0 || !Number.isInteger(value)) {
      throw new Error("PocketNo must be positive/natural numbers only");
    }
  }
}
