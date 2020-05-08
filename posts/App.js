import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UsersScreen from './screens/Users';
import PostsScreen from './screens/Posts';
import DetailScreen from './screens/Detail';

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen
  },
  Posts: {
    screen: PostsScreen
  },
  Detail: {
    screen: DetailScreen
  }
}, {
  initialRouteName: 'Users',
})
export default createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
