import React from "react";
import { ScrollView, Text, View, Image } from "react-native";

export default function AllChatSlide(props) {
    return (
        <View style={{alignItems:"center"}}>
            <ScrollView Vartical={true} style={{ flexDirection : "column" , marginTop : 10}}>
                <View style = {{margin : 10 , padding : 10, borderWidth : 1, width:500, height :70, borderColor : 'gray', borderRadius : 15}}>
                    {/* <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={'../../assets/profile/profile_icon.jpg'} /> */}
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>Mr.Person some1</Text>
                        <Text style={{ color: "gray" }}>Hello!</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
