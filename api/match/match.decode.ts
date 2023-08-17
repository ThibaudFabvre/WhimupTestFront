export const decodeMatches = (matches) =>
  matches.map((match) => decodeMatch(match));

export const decodeMatch = (match) => ({
  id: match.id,
  status: match.status,
  date: match.date,
  location: match.location,
  results: match.results,
  teams: match.teams,
});
