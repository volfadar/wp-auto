const clickFunc = async (page, selector) => {
  await page.waitForSelector(selector);
  await page.click(selector);
};

const typeFunc = async (page, selector, messege) => {
  await page.waitForSelector(selector);
  await page.type(selector, messege);
};

module.exports = { clickFunc, typeFunc };
