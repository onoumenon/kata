const calculatePointsForOneMatch = match => {
  const [homeTeam, awayTeam] = match.split(":");

  const homeTeamWon = homeTeam > awayTeam;
  const homeTeamLost = homeTeam < awayTeam;
  const homeTeamDrew = homeTeam === awayTeam;

  if (homeTeamWon) {
    return 3;
  }
  if (homeTeamLost) {
    return 0;
  }
  if (homeTeamDrew) {
    return 1;
  }
};

const calculatePointsForAllMatches = matches => {
  return matches
    .map(match => calculatePointsForOneMatch(match))
    .reduce((acc, currentPoints) => acc + currentPoints, 0);
};

module.exports = { calculatePointsForOneMatch, calculatePointsForAllMatches };
