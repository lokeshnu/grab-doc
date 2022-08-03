import React from "react";
import { View, Image } from "react-native";

export default function FirstScreenEx() {
    return (
        <View style={{ backgroundColor: "steelblue" }}>
            <View style={{ height: '40%', }}>
                <Image source={{ uri: 'https://play-lh.googleusercontent.com/Wxb77s94uMRBDzt-mMbY5UobfEgSgh-dUx2PSP2hjeemNUsmlWiBnxBWXHD0r3Pp-rg3=w600-h300-pc0xffffff-pd' }}
                    style={{ height: '40%', width: '100%', marginTop: 100 }}
                />
            </View>
            <View style={{ height: '60%', marginTop: 10, marginLeft: 140 }}>
                <Image source={{ uri: 'https://1.bp.blogspot.com/--0vVDm-kEIk/YSR0ddUSyKI/AAAAAAAACtw/frRId8kkQio0sWTyQv4G_kEhSFrrG63ggCLcBGAsYHQ/s1307/Female-Indian-Doctor-Pointing-Transparent-Image.png?dl=1' }}
                    style={{ height: '100%', width: 300 }} resizeMode="contain"
                />


            </View>
        </View>
    )
}