const horoscope = require('./horoscope')

const [month, day] = process.argv.slice(2);

try {
  console.log('You are', horoscope(month, day));
} catch (error) {
  console.error(error);
}
