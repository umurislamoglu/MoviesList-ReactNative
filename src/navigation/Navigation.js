import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movies from '../pages/Movies';
import MovieDetail from '../pages/MovieDetail';
import routes from './routes';
import Comments from '../pages/Comments';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.MOVIES_PAGE}
          component={Movies}
          options={{
            headerTitle: 'Movies',
          }}
        />
        <Stack.Screen
          name={routes.MOVIE_DETAIL_PAGE}
          component={MovieDetail}
          options={{
            headerTitle: 'Movie Details',
          }}
        />
          <Stack.Screen
          name={routes.COMMENTS_PAGE}
          component={Comments}
          options={{
            headerTitle: 'Comments',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
