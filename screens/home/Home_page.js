import React from 'react';
import {View} from 'react-native';
import Profile from '../../components/Home/Profile';

export default function Home_page() {
  return (
    <View style={{flex:1, paddingTop:50}}>
      <Profile />
    </View>
  );
}
