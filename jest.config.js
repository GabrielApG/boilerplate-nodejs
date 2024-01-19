/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

process.env = Object.assign(process.env, {
  BASE_URL: "https://fakeBaseUrl.com",
});

module.exports = process.env;

module.exports = {};
