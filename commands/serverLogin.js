const { serverLoginURL } = require('../src/urls');
const { clickFunc, typeFunc } = require('../helpers/index');
const { urlMaker } = require('../helpers/index');

const serverLogin = async (page) => {
  console.time('Creating serverLogin Need ');
  await page.goto(serverLoginURL);
  page.setDefaultTimeout(300000);
  page.setDefaultNavigationTimeout(300000);
  await typeFunc(page, `[name='user']`, process.env.USER_CPANEL);
  await typeFunc(page, `[name='pass']`, process.env.PW_CPANEL);
  await clickFunc(page, `button[name='login']`);
  await urlMaker(page);
  await page.waitForTimeout(1000);
  console.timeEnd('Creating serverLogin Need ');
};

module.exports = { serverLogin };
