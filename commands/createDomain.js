const { createDomainURL } = require('../src/urls');
const { domain } = require('../src/data');
const { typeFunc, clickFunc } = require('../helpers');

const createDomain = async (page) => {
  console.time('Creating Domain Need ');
  console.log(createDomainURL());
  await page.goto(createDomainURL());
  await typeFunc(page, `#newDomainName`, domain);
  await clickFunc(page, `#inheritDocumentRoot`);
  await page.waitForTimeout(1000);
  await clickFunc(page, `.btn.btn-primary.btn.btn`);
  await typeFunc(page, `#domainItemLister_search_input`, domain);
  await page.waitForTimeout(1000);
  await page.waitForSelector(`#${domain.replace('.', `\\.`)}`);
  console.log(`successfully loaded`);
  console.timeEnd('Creating Domain Need ');
};

module.exports = { createDomain };
