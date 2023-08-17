

import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native'
import useMatchStore from '../store/matches.store';
import Match from '../components/Match';
import { FC } from 'react';

const UpcomingMatchesScreen : FC<{}> = () => {
    const matches = useMatchStore(state => state.matches)
    const now = new Date()
    const upcomingMatches = matches.filter(match => ((match.status === 'ongoing') || (match.status === 'upcoming')) && Number(match.date) > now.getTime() )
    const chronologicalMatches = upcomingMatches.sort((matchA, matchB) => (new Date(matchA.date).getTime() - new Date(matchB.date).getTime()) )

    return (
        <SafeAreaView>
            <FlatList data={chronologicalMatches} renderItem={({ item }) => <Match match={item} /> } />
        </SafeAreaView>
    )
}

export default UpcomingMatchesScreen