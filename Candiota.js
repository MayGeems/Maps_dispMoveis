import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  Pressable,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Speech from "expo-speech";

const DATA = [
  {
    id: "1",
    title: "Candiota",
    imageUri:
      "https://www.candiota.rs.gov.br/wp-content/uploads/2018/10/logo_brasao-2-1.png",
  },
  {
    id: "2",
    title: "9.362 habitantes",
    imageUri:
      "https://1.bp.blogspot.com/-KmOsqhej8E4/WyQKg8rEWsI/AAAAAAAAeek/UNZtOdyhnSkRBFmMQQNxtcfmWf4oLvACACLcBGAs/s1600/candi.portico.Imagem.nossojornal.com.br.jpg",
  },
  {
    id: "3",
    title: "PIB, 163.593,81",
    imageUri: "https://cdn-icons-png.flaticon.com/128/8432/8432303.png",
  },
];

export default function Candiota() {
  // const Cidade = () => {
  //   Speech.speak("Bagé");
  // };
  // const Populacao = () => {
  //   Speech.speak("121.335 habitantes");
  // };
  // const PIB = () => {
  //   Speech.speak("25.942,27");
  // };
  const [selectedId, setSelectId] = useState(null);

  const navigation = useNavigation();

  const renderItemNovo = ({ item }) => {
    return (
      <View style={meuestilo.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#f1f1f1" : "transparent" },
            meuestilo.title,
          ]}
          onPress={Speech.speak(item.title)}
        >
          {/* para imagens locais */}
          {/* <Image source={ item.imageUri} style={meuestilo.itemImage} />  */}
          <Image source={{ uri: item.imageUri }} style={meuestilo.itemImage} />
          <View>
            <Text style={meuestilo.id}>Id: {item.id}</Text>
            <Text style={meuestilo.title}>Title: {item.title}</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={meuestilo.container}>
      <MapView
        style={meuestilo.map}
        initialRegion={{
          latitude: -31.5399497,
          longitude: -53.7164701,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -31.5399497,
            longitude: -53.7164701,
          }}
          title={"Candiota"}
          description={
            "Candiota é um município brasileiro da região Sul com subsolo rico em carvão e calcário."
          }
        ></Marker>
      </MapView>
      <FlatList
        data={DATA}
        renderItem={renderItemNovo}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}
const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  itemImage: {
    width: 64,
    height: 64,
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: "#eee",
    borderRadius: 40,
    elevation: 2,
  },
  map: {
    width: "100%",
    height: "50%",
  },
});
