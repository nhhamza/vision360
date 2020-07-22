export const badgeTypeBuilder = (name, color) => {
  return {
    name,
    color
  };
};

export const cardTypeBuilder = (name, color, logo) => {
  return {
    ...badgeTypeBuilder(name, color),
    logo
  };
};

export const stepBuilder = (name, key) => {
  return {
    name,
    key
  };
};
