import React ,{useState} from "react";
import { View, Text, FlatList, TextInput, StyleSheet ,TouchableOpacity,Image} from "react-native";




export default function Doc() {
    const [DoctorsData] = useState(
        [
            {
                id: 1,
                name: "Dr.S David",
                Speciality: "Orthopedic",
                img: require('../../Images/sofia.webp'),
                Experiance: "7 years Experiance",
                Desig: "MNAMS,D.N.B Orthopedics,M.B.BS",
                Avilable: true,
                Rating: "4.9",
                Reviews: "Reviews",
                lang: "English,Telugu,Tamil,Hindi",
                Location: "Private hospital in Chennai.Tamil Nadu"
            },
            {
                id: 2,
                name: "Dr.S David",
                Speciality: "Orthopedic",
                img: require('../../Images/sofia.webp'),
                Experiance: "7 years Experiance",
                Desig: "MNAMS,D.N.B Orthopedics,M.B.BS",
                Avilable: true,
                Rating: "4.9",
                Reviews: "Reviews",
                lang: "English,Telugu,Tamil,Hindi",
                Location: "Private hospital in Chennai.Tamil Nadu"
            },
            {
                id: 3,
                name: "Dr.S David",
                Speciality: "Orthopedic",
                img: require('../../Images/sofia.webp'),
                Experiance: "7 years Experiance",
                Desig: "MNAMS,D.N.B Orthopedics,M.B.BS",
                Avilable: false,
                Rating: "4.9",
                Reviews: "Reviews",
                lang: "English,Telugu,Tamil,Hindi",
                Location: "Private hospital in Chennai.Tamil Nadu"
            },

        ]
    )
     
    const Doctorlist = ({ item }) => (
       
        <View style={{ margin: 5, padding: 5 }}>
             <TouchableOpacity>
            <View style={{ flexDirection: "row", backgroundColor: "white", }}>
                <View>
                    <Image source={item.img} style={{ height: 75, width: 75, borderRadius: 5, margin: 5 }} />
                </View>
                <View style={{ margin: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item.Speciality}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item.Experiance}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item.Desig}</Text>
                </View>
            </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", backgroundColor: "white", borderBottomWidth: 0.5, paddingBottom: 5 }}>

                <TouchableOpacity >
                    <Text style={[style.text,{backgroundColor:item.Avilable?'green':'red'}]}>
                        {item.Avilable? "Online":"Offline"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.margintext}>
                        {item.Rating}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.margintext}>
                        {item.Reviews}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "white", padding: 5 }}>
                <View>
                    <Text>{item.lang}</Text>
                </View>
                <View>
                    <Text>{item.Location}</Text>
                </View>


            </View>
        </View>
    );
    return (
        <View>
            <View style={{flexDirection:"row",backgroundColor:"blue"}}>
                <View>
                    {/* if possible add BACK ARROW icon here */}
                    <Text style={style.head}>Doctors</Text>
                </View>
                {/* if possible add BELL icon here */}
            </View>
            <View style={{ backgroundColor: "white", height: 50, width: '100%',elevation:15 }}>

            </View>

            <View>
                {/* if possible add icon here */}
                <TextInput placeholder="Search Orthopedic" style={{ backgroundColor: "white", margin: 5, borderRadius: 10, paddingLeft: 10, borderWidth: 0.2, height: 40 }} />
            </View>
            <View style={{ flexDirection: "row", height: '85%', alignItems: "stretch" }}>
            <FlatList
                data={DoctorsData}
                keyExtractor={(item) => (item.id)}
                renderItem={Doctorlist}

            />

        </View>
        </View>
    )
}
const style = StyleSheet.create({
    head: {
        fontWeight: "bold",
        padding: 10,
        fontSize: 25,
        
        color: "white"
    },
    text: {
        
        paddingHorizontal: 7,
        borderRadius: 4,
        marginHorizontal: 15
    },
    margintext: {
        marginHorizontal: 20
    }
})


