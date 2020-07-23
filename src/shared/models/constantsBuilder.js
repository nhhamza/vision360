export const badgeTypeBuilder = (name, background, color) => {
  return {
    name,
    background,
    color
  };
};

export const cardTypeBuilder = (name, background, color, logo) => {
  return {
    ...badgeTypeBuilder(name, background, color),
    logo
  };
};

export const stepBuilder = (name, key) => {
  return {
    name,
    key
  };
};
