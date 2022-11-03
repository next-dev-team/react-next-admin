export const getMenuKey = <T extends Record<string, any>>(
  langKey: LangKey,
  obj: T,
) => {
  let newObj = {};
  Object.keys(obj).forEach((i) => {
    const draftObj = { [i]: obj?.[i]?.[langKey] };
    newObj = { ...newObj, ...draftObj };
  });
  console.log('[getMenuKey]', newObj);

  return newObj;
};

export const withTrKey = <T extends Record<LangKey, any>>(obj: T) => {
  return obj;
};
