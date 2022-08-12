const { urlMaker, theServerURL } = require('./urlMaker');
const { clickFunc, typeFunc } = require('./puppeteerFunc');
const { pauseTheProcess } = require('./setTimeout');

module.exports = {
  urlMaker,
  theServerURL,
  clickFunc,
  typeFunc,
  pauseTheProcess,
};
