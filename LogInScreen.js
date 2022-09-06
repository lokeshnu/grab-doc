import React from "react";
import { Text, View, Image, TextInput, Button } from "react-native";


export default function LoggingScreen() {
    return (
        <View>
            <View>
                <Text style={{ 
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 125, 
        marginTop: 30, 
        color: "black"
        }}>
                    Welcome Back!
                </Text>
                <Image source={{ uri: 'https://www.pinpng.com/pngs/m/182-1824276_healthcare-stethoscope-png-download-doctors-listen-to-your.png' }}
                    style={{
                        height: 300,
                        width: '100%'
                    }}
                />
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "blue",
                    marginLeft: 20,
                    marginTop: 5
                }}>
                    Login
                </Text>
                <View style={{ marginHorizontal: 25 }}>
                    <TextInput placeholder="       Your Phone Number"
                        style={{
                            height: 40,
                            margin: 10,
                            borderWidth: 0.6,
                            borderRadius: 10
                        }} />
                </View>
                <View style={{
                    width: '30%',
                    marginLeft: '35%',
                    marginTop: 20
                }}>
                    <Button title="LOGIN"
                        color={"blue"} />
                </View>
            </View>
            <Image source={{ uri: 'https://image.shutterstock.com/image-vector/heartbeat-pulse-vector-line-icon-260nw-1832174521.jpg' }}
                style={{
                    height: 150,
                    width: '100%',
                    marginTop: 20
                }} />
        </View>
    )
}
