const { activateSSL } = require('./activateSSL');
const { createDomain } = require('./createDomain');
const { createWordpress } = require('./createWordpress');
const { serverLogin } = require('./serverLogin');

module.exports = { createDomain, createWordpress, serverLogin, activateSSL };
