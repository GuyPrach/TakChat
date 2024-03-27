import React from 'react';
import { ScrollView, View } from 'react-native';
import AllChatSlide from '../../components/Chat/ChatMenu/AllChatSlide'


export default function ChatMenu() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                <AllChatSlide />
                
            </View>
        </ScrollView>
    );
}