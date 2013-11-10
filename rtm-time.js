var units = {
	S : 1,
	s : 1000,
	m : 1000 * 60,
	h : 1000 * 60 * 60,
	d : 1000 * 60 * 60 * 24
};

/**
 * Parses time in 'Remember the Milk' or Jira format where the
 * string is in the format of a number followed by a single
 * letter abbreviation for a a unit of time. The valid units
 * are:
 * S: Milliseconds
 * s: Seconds
 * m: Minutes
 * h: Hours
 * d: Days
 *
 * Examples:
 * 1m: 1 minute
 * 2h: 2 hours
 * 30d: 30 days
 *
 * The result is returned in total milliseconds.
 * @param s
 */
exports.parse = function(s) {
	if (!s) {
		return null;
	}
	s = s.trim();
	var unit = s.substring(s.length - 1);
	var value = s.substring(0, s.length - 1);
	if (!units.hasOwnProperty(unit)) {
		return null;
	}
	if (isNaN(value)) {
		return null;
	}
	value = Number(value);
	return units[unit] * value;
};
