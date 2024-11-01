import { describe, expect, it } from "vitest";
import { BinderFactory, FreePocketPageFactory, SpecifiedPocketPageFactory } from "@binder/binder";
import { BinderBasicConfig, BinderPageConfig } from "@binder/constraint/binder.config";

describe("binder factory", () => {
  describe("factory binder", () => {
    it("should be get binder id", () => {
      const actual = BinderFactory();
      expect(actual.id).not.toBeUndefined();
    });
  });

  describe("factory free pocket page", () => {
    it("should be free pocket page", () => {
      const freePocketPage = FreePocketPageFactory();
      expect(freePocketPage.size).toBe(BinderPageConfig.freePocketPage());
    });
    it("free pocket size per page", () => {
      const freePocketPage = FreePocketPageFactory();
      freePocketPage.forEach((value) => {
        expect(value.length).toBe(BinderBasicConfig.pocketPerPage);
      });
    });
  });

  describe("factory specified pocket page", () => {
    const target = SpecifiedPocketPageFactory();

    it("should be size pocket page", () => {
      expect(target.size).toBe(BinderPageConfig.specifiedPocketPage());
    });
    it("should be size pocket per page", () => {
      target.forEach((value) => {
        expect(value.length).toBe(BinderBasicConfig.pocketPerPage);
      });
    });
  });
});
