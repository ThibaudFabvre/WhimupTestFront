import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchesScreen from './screens/Matches.screen';
import MatchDetailScreen from './screens/MatchDetail.screen';
import UpcomingMatchesScreen from './screens/UpcomingMatches.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Matches" component={MatchesScreen} options={{title: 'Matches'}}/>
          <Stack.Screen name="UpcomingMatches" component={UpcomingMatchesScreen}  options={{title: 'Upcoming Matches'}}/>
          <Stack.Screen name="MatchDetail" component={MatchDetailScreen}  options={{title: 'Match details'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
