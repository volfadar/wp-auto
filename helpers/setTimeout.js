const pauseTheProcess = async (time) => {
  return new Promise((res) => setInterval(res, time));
};

module.exports = { pauseTheProcess };
