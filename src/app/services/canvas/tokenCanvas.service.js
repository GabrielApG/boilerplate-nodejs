const canvasApi = require("../../api/canvas.api");
const log = require("../../../log");

module.exports = class TokenCanvas {
  refreshTokenCanvas(token, refreshToken, client) {
    const data = {
      grant_type: "refresh_token",
      client_id: client.canvas_client_id,
      client_secret: client.canvas_secret_id,
      refresh_token: refreshToken,
    };
    return canvasApi(client.canvas_url_api, token)
      .post("/login/oauth2/token/", data)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        log.error("RefreshTokenCanvas Error", error);
        throw new Error("Erro ao renovar token do usuário");
      });
  }
};
