import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name={'Bookmarks'}
          component={BookmarksScreen}
          options={{headerTintColor: '#000'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
