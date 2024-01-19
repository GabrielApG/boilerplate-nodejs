const axios = require("axios");

const exampleApi = (example_url_api, token_example) => {
  return axios.create({
    baseURL: `${example_url_api}`,
    headers: {
      Authorization: `Bearer ${token_example}`,
    },
  });
};

module.exports = exampleApi;
