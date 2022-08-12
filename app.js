const Puppeteer = require('puppeteer');
const cmd = require(`./commands/index`);

require('dotenv').config();

const createWebsite = async () => {
  console.time('time to process web ');
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await cmd.serverLogin(page);
  await cmd.createDomain(page);
  await cmd.createWordpress(page);
  await cmd.activateSSL(page);

  console.timeEnd('time to process web ');
};

createWebsite();
