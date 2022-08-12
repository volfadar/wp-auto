const { createWordpressURL } = require('../src/urls');
const { clickFunc } = require('../helpers/index');
let {
  domain,
  username,
  password,
  emailWeb,
  tipeWeb,
  namaBrand,
} = require('../src/data');

const createWordpress = async (page) => {
  console.time('Creating Wordpress Need ');
  await page.goto(createWordpressURL());
  await clickFunc(page, '[name="install_button"]');
  await page.waitForSelector('#theme');
  await page.$eval('#softdomain', (e, domain) => (e.value = domain), domain);
  await page.$eval(
    '[name="site_name"]',
    (e, namaBrand) => {
      e.value = namaBrand;
    },
    namaBrand
  );
  await page.$eval(
    '[name="site_desc"]',
    (e, tipeWeb) => (e.value = tipeWeb),
    tipeWeb
  );
  username = await page.$eval(
    '[name="admin_username"]',
    (e, username) => {
      if (username === '' || username == null || username == undefined) {
        return e.value;
      } else {
        e.value = username;
      }
    },
    username
  );
  password = await page.$eval(
    '[name="admin_pass"]',
    (e, password) => {
      if (password === '' || password == null || password == undefined) {
        return e.value;
      } else {
        e.value = password;
      }
    },
    password
  );

  emailWeb = await page.$eval(
    '[name="admin_email"]',
    (e, emailWeb, domain) => {
      if (emailWeb === '' || emailWeb == null || emailWeb == undefined) {
        e.value = `admin@${domain}`;
        return e.value;
      } else {
        e.value = emailWeb;
      }
    },
    emailWeb,
    domain
  );

  await page.waitForSelector('#softsubmitbut');
  await clickFunc(page, '#softsubmitbut');
  await page.waitForSelector('#install_win');
  console.timeEnd('Creating Wordpress Need ');
};

module.exports = { createWordpress };
