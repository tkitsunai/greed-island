export const BinderBasicConfig = {
  specifiedPocketSize: 100,
  freePocketSize: 45,
  pocketPerPage: 9,
};

export const BinderPageConfig = {
  specifiedPocketPage: (): number => {
    return Math.round(BinderBasicConfig.specifiedPocketSize / BinderBasicConfig.pocketPerPage);
  },
  freePocketPage: (): number => {
    return Math.round(BinderBasicConfig.freePocketSize / BinderBasicConfig.pocketPerPage);
  },
};
