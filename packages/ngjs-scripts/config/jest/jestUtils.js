export const createSpyObj = (baseName, methodNames) => {
  let obj = {};

  for (let i = 0; i < methodNames.length; i++) {
    obj[methodNames[i]] = jest.fn();
  }

  return obj;
};
