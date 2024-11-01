import { describe, expect, it } from "vitest";
import { BinderPageConfig } from "../../../packages/binder/src/constraint/binder.config";

describe("Binder Config", () => {
  it("get specified pocket page size", () => {
    const actual = BinderPageConfig.specifiedPocketPage();
    expect(actual).toBe(11);
  });

  it("get free pocket page size", () => {
    const actual = BinderPageConfig.freePocketPage();
    expect(actual).toBe(5);
  });
});
