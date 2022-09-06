import React from "react";
import { View, Text, Image, TextInput, Button } from "react-native";

export default function FourScr() {
    return (
        <View>
            <View style={{ height: 250, width: '100%', backgroundColor: "white" }}>
                 <Image source ={{ uri: 'https://www.clipartmax.com/png/full/13-134397_heart-shape-hands-transparent-image-heart-hands-transparent-background.png'}}
                 style={{ height:'100%',
                   width:'100%'}}/>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
                <Image source={require('../Images/Person1.jpg')} style={{ width: 40, height: 40, marginRight: 5 }} />
                <TextInput placeholder="First Name" />
            </View>
            <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
                <Image source={require('../Images/Person1.jpg')} style={{ width: 40, height: 40, marginRight: 5 }} />
                <TextInput placeholder="Last Name" />
            </View>
            <View style={{ flexDirection: "row", marginTop: 6, marginLeft: 10 }}>
                <Image source={require('../Images/phone.jpg')} style={{ width: 40, height: 40, marginRight: 5 }} />
                <TextInput placeholder="Phone number" />
            </View>
            <View style={{ flexDirection: "row", marginTop: 6, marginLeft: 10 }}>
                <Image source={require('../Images/Email.jpg')} style={{ width: 40, height: 40, marginRight: 5 }} />
                <TextInput placeholder="Email" />
            </View>
            <View style={{ flexDirection: "row", marginTop: 6, marginLeft: 10 }}>
                <Image source={require('../Images/Date.jpg')} style={{ width: 40, height: 40, marginRight: 5 }} />
                <TextInput placeholder="Date of birth(dd/mm/yy)" />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly",marginTop:20 }}>
                <View style={{width:'20%'}}><Button title="Male" /></View>
                <View style={{width:'20%'}}><Button title="Female" /></View>
                <View style={{width:'20%'}}><Button title="Others" /></View>
            </View>
            <View style={{width:'70%',marginLeft:'15%' ,marginTop:30}}><Button title="Continue"/></View>
            <Image source={{uri:'https://image.shutterstock.com/image-vector/heartbeat-pulse-vector-line-icon-260nw-1832174521.jpg'}}
          style={{height:100,width:'90%',marginTop:5}} />
        </View>
    )
}
