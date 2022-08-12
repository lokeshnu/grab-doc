import React, { useRef, useState } from "react";
import { View, Text, Button, DrawerLayoutAndroid, Image, TouchableNativeFeedback, TextInput, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { List } from "reactstrap";
import ListOfSpec from "./flat";



export default function Fifthsrc() {
    const [pick, setpick] = useState('Cheat Pain')
    const drawer = useRef(null);
    const mainView = () => (
        <View>
            <View style={{ backgroundColor: "white", height: "100%", width: 300 }}>
                <Text>menu</Text>
                <View style={{
                    // height: 70,
                    width: '100%',
                    justifyContent: "center"
                }}>
                    < Button title="close draw" onPress={() => drawer.current.closeDrawer()} />
                </View>
            </View>



        </View>

    )
    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={mainView}
        >
            <View>
                <View>
                    <TouchableNativeFeedback onPress={() => drawer.current.openDrawer()}>
                        <Image source={require('../Images/threeline.png')} style={{ height: 50, width: 50 }} />
                    </TouchableNativeFeedback>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", margin: 10 }}>
                    <View style={{ alignItems: "center", height: 80, width: 60, margin: 5 }}>
                        <TextInput placeholder="1" style={style.input} />
                        <Text style={style.align}>Search Specialities/Doctors</Text>
                    </View>
                    <View style={{ alignItems: "center", height: 80, width: 50, margin: 5 }}>
                        <TextInput placeholder="2" style={style.input} />
                        <Text style={style.align}>Select time slot</Text>
                    </View>
                    <View style={{ alignItems: "center", height: 80, width: 50, margin: 5 }}>
                        <TextInput placeholder="3" style={style.input} />
                        <Text style={style.align}>Confirm & pay</Text>
                    </View>
                </View>
              
                <Text style={style.reason}>Reason for consulting</Text>
                <View style={{ margin: 5 }}>

                    <Picker
                        style={style.Picker}
                        selectedValue={pick}
                        onValueChange={(itemValue) => setpick(itemValue)}
                    >
                        <Picker.Item label="Chest Pain" value={"Chest Pain"} />
                        <Picker.Item label="Headache" value={"Headache"} />
                        <Picker.Item label="Wheezing" value={"Wheezing"} />
                        <Picker.Item label="Cold" value={"Cold"} />

                    </Picker>
                </View>
                <Text style={{fontSize:15,borderWidth:0.5,width:100, margin:5}}>{pick}</Text>
                <Text style={style.reason}> Specialities</Text>
                <TextInput placeholder="Search Specialities/Doctors " style={style.sear} />
                <ListOfSpec/>
            </View>
        </DrawerLayoutAndroid>
    )

}
const style = StyleSheet.create({

    Picker: {
        height: 50,
        width: '100%',
        margin: 10,
        color: "white",
        backgroundColor: "gray",
        borderWidth: 1,


    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: 20,
        height: 10,
        alignItems: "center"
    },
    align: {
        textAlign: "center"
    },
    reason: {
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 5
    },
    sear: {
        borderWidth: 0.5,
        margin: 5,
        borderRadius: 20
    },
})