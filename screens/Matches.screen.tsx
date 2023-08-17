import { FlatList, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useMatchStore, { Match as T_Match } from '../store/matches.store';
import Match from '../components/Match';
import { useNavigation } from '@react-navigation/native';
import { FC, useEffect } from 'react';
import { getMatches } from '../api/match/match.api';


const MatchesScreen : FC<{}> = () => {
    
    const navigation = useNavigation();
    const matches = useMatchStore(state => state.matches)
    const setMatches = useMatchStore(state => state.setMatches)

    useEffect(() => {
        const initiateMatchScreen = async () => {
            const result : unknown = await getMatches();
            if(result) {
                setMatches(result as Array<T_Match>)
            }
        }
        initiateMatchScreen()
    }, [setMatches])

    return (
        <SafeAreaView>
            <TouchableOpacity style={{ backgroundColor: 'blue', borderRadius: 25, padding: 4, width: 240 }} onPress={() => navigation.navigate('UpcomingMatches')}>
                <Text style={{color: 'white',  textAlign: 'center'}}>View Upcoming Matches</Text>
            </TouchableOpacity>
            <FlatList data={matches} renderItem={({ item }) => <Match match={item} />} />
        </SafeAreaView>
    )
}

export default MatchesScreen