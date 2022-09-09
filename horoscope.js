const getZodiacSign = (month, day) => {
  const calendarMonths = {
    1: { maxDays: 31, name: 'January' },
    2: { maxDays: 29, name: 'February' },
    3: { maxDays: 31, name: 'March' },
    4: { maxDays: 30, name: 'April' },
    5: { maxDays: 31, name: 'May' },
    6: { maxDays: 30, name: 'June' },
    7: { maxDays: 31, name: 'July' },
    8: { maxDays: 31, name: 'August' },
    9: { maxDays: 30, name: 'September' },
    10: { maxDays: 31, name: 'October' },
    11: { maxDays: 30, name: 'November' },
    12: { maxDays: 31, name: 'December' },
  };

  // ensure date is within range
  if (month < 1 || month > 12) throw new Error('Error!! Month is out of range');

  if (day < 1) throw new Error('Error!! maxDays cannot be less than 1');

  if (day > calendarMonths[month].maxDays)
    throw new Error(
      `There are only ${calendarMonths[month].maxDays} days in ${calendarMonths[month].name}`
    );

  const signs = {
    1: `${day <= 19 ? 'Capricorn' : 'Aquarius'}`,
    2: `${day <= 18 ? 'Aquarius' : 'Pisces'}`,
    3: `${day <= 20 ? 'Pisces' : 'Aries'}`,
    4: `${day <= 19 ? 'Aries' : 'Taurus'}`,
    5: `${day <= 20 ? 'Taurus' : 'Gemini'}`,
    6: `${day <= 20 ? 'Gemini' : 'Cancer'}`,
    7: `${day <= 22 ? 'Cancer' : 'Leo'}`,
    8: `${day <= 22 ? 'Leo' : 'Virgo'}`,
    9: `${day <= 22 ? 'Virgo' : 'Libra'}`,
    10: `${day <= 22 ? 'Libra' : 'Scorpio'}`,
    11: `${day <= 21 ? 'Scorpio' : 'Sagittarius'}`,
    12: `${day <= 21 ? 'Sagittarius' : 'Capricorn'}`,
  };

  return signs[month];
}

module.exports = getZodiacSign;
