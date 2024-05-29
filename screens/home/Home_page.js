import React from 'react';
import {ScrollView ,Text, View} from 'react-native';
import Profile from '../../components/Home/Profile';

const Home_page = () => {
  return (
    // <ScrollView>
    //   <View style = {{ flex : 1, paddingTop : 50}}>
    //     <Profile />
    //   </View>
    // </ScrollView>

  
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, This page will be Home page in the future!!</Text>
    </View>
  );
};
export default Home_page;