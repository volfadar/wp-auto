let test = [];

let theServerURL = () => {
  return test;
};

const urlMaker = async (page) => {
  await page.setRequestInterception();
  await page.on('request', (request) => {
    if (test.length < 1) {
      test = request.url().split('/frontend')[0];
    }
  });
  await page.waitForNetworkIdle();
};

module.exports = { urlMaker, theServerURL };
