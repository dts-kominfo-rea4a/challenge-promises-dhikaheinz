const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const allTheater = theaterIXX.concat(theaterVGC)

  let emosiViewer = 0;

  allTheater.forEach((film) => {
    if (film.hasil === emosi) {
      emosiViewer++;
    }
  })
  return emosiViewer;
};

console.log(promiseOutput('marah'))

module.exports = {
  promiseOutput,
};