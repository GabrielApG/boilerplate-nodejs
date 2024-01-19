const TokenCanvas = require("../models/tokenCanvas.model");

var tokenCanvasRepository = {
  findAll: findAll,
  findLastTokenByUserId: findLastTokenByUserId,
  create: create,
  updateTokenByUserId: updateTokenByUserId,
};

/**
 * Find all
 *
 * @returns
 */
function findAll() {
  return TokenCanvas.findAll();
}

/**
 * Find last token by user id
 *
 * @param {String} userId
 * @returns
 */
function findLastTokenByUserId(userId) {
  return TokenCanvas.findOne({
    where: {
      client_id: userId,
    },
    order: [["id", "DESC"]],
  });
}

/**
 * Create token canvas
 *
 * @param {Object} token
 * @returns
 */
function create(token) {
  var newTokenCanvas = new TokenCanvas(token);

  return newTokenCanvas.save();
}

/**
 * Update token by user id
 *
 * @param {String} userId
 * @param {Object} tokenData
 */
function updateTokenByUserId(userId, tokenData) {
  return TokenCanvas.update(tokenData, {
    where: {
      client_id: userId,
    },
  });
}

module.exports = tokenCanvasRepository;
