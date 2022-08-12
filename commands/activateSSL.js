const { clickFunc } = require('../helpers');
const { activateSSLURL } = require('../src/urls');

const activateSSL = async (page) => {
  console.time('processing SSL Need ');
  await page.goto(activateSSLURL());
  await page.waitForSelector('#btnRecheckAutoSSL');
  const selectorCondition = async () => {
    return new Promise(async (res) => {
      let condition = await page.$eval('#btnRecheckAutoSSL', (e) => {
        return e.className.includes('button-loading');
      });
      res(condition);
    }).then((res) => {
      return res;
    });
  };
  const time = await page.$eval('.page-stats', (e) => {
    return e.lastChild.textContent.split(' ')[3] * 200;
  });
  if (await selectorCondition()) {
    await page.waitForTimeout(time);
    while (await selectorCondition()) {
      await page.waitForTimeout(500);
    }
  } else {
    await clickFunc(page, '#btnRecheckAutoSSL');
    // await page.waitForTimeout(time);
    while (await selectorCondition()) {
      await page.waitForTimeout(500);
    }
  }
  console.timeEnd('processing SSL Need ');
};

module.exports = { activateSSL };
