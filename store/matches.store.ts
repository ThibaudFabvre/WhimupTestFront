import { create } from 'zustand';
import { Team } from './teams.store';

export type Match = {
  id: string;
  status: 'ongoing' | 'upcoming' | 'finished';
  location: string;
  date: string;
  results: Array<{ id: string; result: number }>;
  teams: Array<Team>;
};

type MatchStore = {
  matches: Array<Match>;
  selectedMatch: Match;
  setMatches: (matches: Array<Match>) => void;
  setSelectedMatch: (match: Match) => void;
};

const useMatchStore = create<MatchStore>((set) => {
  return {
    matches: [],
    selectedMatch: null,
    setMatches: (matches) => {
      return set((state) => {
        return { ...state, matches };
      });
    },
    setSelectedMatch: (selectedMatch) => {
      return set((state) => {
        return {
          ...state,
          selectedMatch,
        };
      });
    },
  };
});

export default useMatchStore;
