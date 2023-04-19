
const sizes = {
  small: 640,
  medium: 768,
  large: 1024,
  xlarge: 1280,
};

const mediaQueries = {
  small: `@media (max-width: ${sizes.small}px)`,
  medium: `@media (max-width: ${sizes.medium}px)`,
  large: `@media (max-width: ${sizes.large}px)`,
  xlarge: `@media (max-width: ${sizes.xlarge}px)`,
};

export default mediaQueries;
