import { decodeMatch, decodeMatches } from './match.decode';
import { API } from '../provider';

export const getMatches = async () => {
  try {
    const result = await API().get('/matches');
    return decodeMatches(result.data);
  } catch (e) {}
};

export const getMatch = async ({ id }: { id: string }) => {
  try {
    const result = await API().get(`/matches/${id}`);
    return decodeMatch(result.data);
  } catch (e) {}
};
