import { Brand } from "@/types/brandedTypes";
import { FreePocket, Pocket, SpecifiedPocket } from "./pocket";
import { PocketNo } from "./pocketNo";
import { BinderBasicConfig, BinderPageConfig } from "./constraint/binder.config";
import { Card } from "@greedisland/card/src/card";

export type BinderId = Brand<string, "BinderId">;

type PageNumber = number;
type Pockets = Pocket[];
type PocketPage = Map<PageNumber, Pockets>;
type SpellCard = Card;

type PlayerEncounterInfo = {
  playerId: Brand<string, "PlayerId">;
  name: string;
  status: "online" | "offline";
};

export type PlayerEncounterInfoList = PlayerEncounterInfo[];

export type BinderProps = {
  id: BinderId;

  specifiedPocketPage: PocketPage;
  freePocketPage: PocketPage;

  spellSlot?: SpellCard;
};

type SpellInfo = {
  message: string;
};

export class Binder {
  constructor(private readonly props: BinderProps) {}

  get id(): BinderId {
    return this.props.id;
  }

  isEmpty(): boolean {
    // TODO
    throw new Error("Not implemented");
  }

  addCardToPocket(pocketNo: PocketNo): Binder {
    // TODO
    throw new Error("Not implemented");
  }

  removeCardFromPocket(pocketNo: PocketNo): Binder {
    // TODO
    throw new Error("Not implemented");
  }

  spellInfo(): SpellInfo {
    // TODO
    throw new Error("Not implemented");
  }
}

export const SpecifiedPocketPageFactory = (): PocketPage => {
  const specifiedPocketPage = new Map<number, Pocket[]>();
  Array.from({ length: BinderPageConfig.specifiedPocketPage() }).forEach((_, i) => {
    const pagePockets = Array.from({ length: BinderBasicConfig.pocketPerPage }).map((_, j) => {
      return new SpecifiedPocket();
    });
    specifiedPocketPage.set(i, pagePockets);
  });
  return specifiedPocketPage;
};

export const FreePocketPageFactory = (): PocketPage => {
  const freePocketPage = new Map<number, Pocket[]>();
  Array.from({ length: BinderPageConfig.freePocketPage() }).forEach((_, i) => {
    const pagePockets = Array.from({ length: BinderBasicConfig.pocketPerPage }).map((_, j) => {
      return new FreePocket();
    });
    freePocketPage.set(i, pagePockets);
  });
  return freePocketPage;
};

export const BinderFactory = (): Binder => {
  return new Binder({
    // TODO
    id: "binderID" as BinderId,
    specifiedPocketPage: SpecifiedPocketPageFactory(),
    freePocketPage: FreePocketPageFactory(),
  } as BinderProps);
};
