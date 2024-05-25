import react from 'react';
import { View , Image , Text} from 'react-native';

export default function Profile() {
    return (
        <View style={{ flexDirection: "row", padding: 10 }}>
            <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("C:\Users\guy88\TakChat\assets\profile\profile_icon.jpg")} />
            <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>Steve Garrett</Text>
                <Text style={{ color: "gray" }}>5 hours ago | 100k views</Text>
            </View>
        </View>

    );
}

