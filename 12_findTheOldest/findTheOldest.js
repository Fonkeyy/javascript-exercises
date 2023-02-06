const findTheOldest = function (arr) {
  if (!yearOfDeath) {
    yearOfDeath = new Date().getFullYear();
  }
  const age = arr.map((person) => person.yearOfDeath - person.yearOfBirth);
  const sorted = age.sort((a, b) => (a < b ? 1 : -1));
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
