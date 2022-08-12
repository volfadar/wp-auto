const { pauseTheProcess } = require('../helpers');

const queue = [];
const maxqueue = 4;

let power = true;

(async () => {
  while (power) {
    if (queue.length != 0) {
      console.log('mantap');
      await pauseTheProcess(1000);
    } else {
      console.log('mantap');
      await pauseTheProcess(1000);
    }
  }
})();

module.exports = { queue };
