import React, { Component, useRef } from "react";
import { View, Text, Image, TextInput, Button, SafeAreaView, StyleSheet, Pressable } from "react-native";

export default function Verificationscreen() {

  return (
    <View >
      <View style={style.viewst}>
        <Text style={style.verify}>Verification</Text>
      </View>
      <Image source={{ uri: 'https://img.freepik.com/premium-vector/security-otp-one-time-password-smartphone-shield_9904-104.jpg' }
      } style={{ height: 250, width: '100%' }} resizeMode="contain" />
      <View style={{ marginHorizontal: 55, height: '25%' }}>
        <Text style={{ fontSize: 20 }}>Enter the <Text style={{ fontSize: 20, fontWeight: "bold" }}>OTP

        </Text> code from the phone we just sent to you.
        </Text>
        <View style={{ flex: 0.6, flexDirection: "row", justifycontent: "center", marginLeft: 30 }}>
          <View style={{ height: 90 }}>
            <TextInput placeholder=""
              //ref={"nameref"}
              style={{

                borderColor: "blue",
                borderWidth: 0.1,
                borderRadius: 10,
                backgroundColor: "gray",
                margin: 10
              }}
            />
          </View >
          <View style={{ height: 90 }}><TextInput placeholder=""
            //ref={"nameref"}
            style={{
              borderColor: "blue",
              borderWidth: 0.1,
              borderRadius: 10,
              backgroundColor: "gray",
              margin: 10
            }}
          />
          </View>
          <View style={{ height: 90 }}><TextInput placeholder=""
            //ref={"nameref"}
            style={{
              borderColor: "black",
              borderWidth: 0.1,
              borderRadius: 10,
              backgroundColor: "gray",
              margin: 10
            }}
          />
          </View>
          <View style={{ height: 90 }}><TextInput placeholder=""
            //ref={"nameref"}
            style={{
              borderColor: "black",
              borderEndWidth: 1,
              borderRadius: 10,
              backgroundColor: "gray",
              margin: 10
            }}
          />
          </View>
        </View>



      </View><View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 17, marginLeft: 50 }}>Don't recevie the OTP ? </Text><Pressable ><View></View><Text style={{ color: "blue", fontSize: 17, fontWeight: "bold" }}>Resend OTP</Text></Pressable>
      </View>

      <View style={{ margin: 30 }}><Button title="Verify & Proceed" /></View>
      <Image source={{ uri: 'https://image.shutterstock.com/image-vector/heartbeat-pulse-vector-line-icon-260nw-1832174521.jpg' }}
        style={{ height: 100, width: '90%', marginTop: 20 }} />
    </View>

  )
}
const style = StyleSheet.create({
  viewst: {
    flexDirection: "row",
    justifyContent: "center"
  }
  ,
  verify: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 25, marginTop: '13%'

  },

})