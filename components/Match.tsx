
import { View, Text, TouchableOpacity } from 'react-native';
import useMatchStore, { Match as T_Match} from '../store/matches.store';
import { useNavigation } from '@react-navigation/native';
import { DESIGN_SYSTEM } from '../configs/app.config';
import { FC } from 'react';

const getStatusColor = (status : string) => {
    switch(status) {
        case 'ongoing':
            return DESIGN_SYSTEM.ongoing_color;
        case 'upcoming':
            return DESIGN_SYSTEM.upcoming_color;
        default :
            return DESIGN_SYSTEM.finished_color;
        
    }
}

type Props = {
    match: T_Match
}

const Match : FC<Props>= ({ match }) => {

    const navigation = useNavigation();
    const setSelectedMatch = useMatchStore(state => state.setSelectedMatch);
    const matchDate = new Date(Number(match.date));
    return (
        <TouchableOpacity key={match.id} style={{ height: 80, backgroundColor: getStatusColor(match.status) }} onPress={() => { setSelectedMatch(match); navigation.navigate('MatchDetail')} }>
            <View><Text>Location: {match.location}</Text></View>
            <View><Text>Date: {`${matchDate.toDateString()} ${matchDate.getHours()}:${matchDate.getMinutes()}`} </Text></View>
            <View>
                <Text>{match.teams[0].name}</Text>
                <Text>{match.teams[1].name}</Text>
            </View>
            <View>
                <Text>Result: {match.results[0].result ?? null} : {match.results[1].result ?? null}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Match;