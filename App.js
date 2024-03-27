import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import ChatMenu from './screens/Chat/ChatMenu';

export default function App() {
  return (
    <View>
      <ChatMenu/>
    </View>
  );
}

