const routes = require("@/routes");
export const getSourceForRoute = (key, locale) => {
  const route = routes[key];

  if (route && route[locale]) {
    const source = route[locale].source;
    return source;
  }

  return null;
};
