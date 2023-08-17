

export const decodeTeams = (teams) => ({
  teams: teams.map((team) => decodeTeam(team)),
});

export const decodeTeam = (team) => ({
  id: team.id,
  name: team.status,
  
});
