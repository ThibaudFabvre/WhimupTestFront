import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useMatchStore from '../store/matches.store';
import useTeamsStore from '../store/teams.store';
import Match from '../components/Match';
import { FC, useState } from 'react';



const MatchDetailScreen : FC<{}> = () => {

    const [showTeamMatches , setShowTeamMatches] = useState(false);
    const now = new Date()
    const matches = useMatchStore(state => state.matches);
    const selectedMatch = useMatchStore(state => state.selectedMatch);
    const setSelectedTeam = useTeamsStore(state => state.setSelectedTeam);
    const selectedTeam = useTeamsStore(state => state.selectedTeam);

    const matchesToRender = matches.filter(match => (match.teams.find(team =>  team.id === selectedTeam?.id ) && Number(match.date) > now.getTime()))

    const matchDate = new Date(Number(selectedMatch.date))
    return (
        <SafeAreaView>
            {selectedMatch ?
            <View>
                <View><Text>{selectedMatch.location}</Text></View>
                <View><Text>{`${matchDate.toDateString()} ${matchDate.getHours()}:${matchDate.getMinutes()}`}</Text></View>
                <TouchableOpacity onPress={() => { 
                    selectedMatch.teams[0].id !== selectedTeam?.id ? setShowTeamMatches(true) : setShowTeamMatches(!showTeamMatches);
                    setSelectedTeam(selectedMatch.teams[0]);
                     } }>
                        <Image style={{ width: 40, height: 40 }} source={{ uri: selectedMatch.teams[0].logo}}/>
                        <Text>{selectedMatch?.teams[0].name}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => { 
                    selectedMatch.teams[1].id !== selectedTeam?.id ? setShowTeamMatches(true) : setShowTeamMatches(!showTeamMatches);
                    setSelectedTeam(selectedMatch.teams[1]);
                     } }>
                        <Image style={{ width: 40, height: 40 }} source={{ uri: selectedMatch.teams[1].logo}}/>
                        <Text>{selectedMatch?.teams[1].name}</Text>
                </TouchableOpacity>
                <View>
                    <Text>Result: {selectedMatch.results[0].result ?? null} : {selectedMatch.results[1].result ?? null}</Text>
                </View>
                {showTeamMatches ? 
                    <FlatList data={matchesToRender} renderItem={({ item }) => <Match match={item} />} /> 
                    : null
                }
            </View> : null }
        </SafeAreaView>
    )
}

export default MatchDetailScreen