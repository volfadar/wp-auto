const { theServerURL } = require('../helpers/index');

const ServerList = ['103.153.3.20', '54.36.167.80'];

const serverLoginURL = `http://${ServerList[0]}:2083`;

const createDomainURL = () => {
  return `${theServerURL()}/frontend/paper_lantern/domains/index.html#/create`;
};
const createWordpressURL = () => {
  return `${theServerURL()}/frontend/paper_lantern/softaculous/index.live.php?act=wordpress`;
};

const activateSSLURL = () => {
  return `${theServerURL()}/frontend/paper_lantern/security/tls_status/#/`;
};

module.exports = {
  createDomainURL,
  createWordpressURL,
  serverLoginURL,
  activateSSLURL,
};
