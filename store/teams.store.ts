import { create } from 'zustand';

type URL = string;

export type Team = {
  id: string;
  name: string;
  result?: number;
  logo?: URL;
};

type MatchStore = {
  teams: Array<Team>;
  selectedTeam: Team;
  setTeams: (teams: any) => void;
  setSelectedTeam: (team: any) => void;
};

const useTeamsStore = create<MatchStore>((set) => {
  return {
    teams: [],
    selectedTeam: null,
    setTeams: (teams) => {
      return set((state) => {
        return { ...state, teams };
      });
    },
    setSelectedTeam: (selectedTeam) => {
      return set((state) => {
        return {
          ...state,
          selectedTeam,
        };
      });
    },
  };
});

export default useTeamsStore;
