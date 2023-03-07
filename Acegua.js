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
    title: "Aceguá",
    imageUri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Bandeira_de_Acegu%C3%A1.svg/120px-Bandeira_de_Acegu%C3%A1.svg.png",
  },
  {
    id: "2",
    title: "1.511 habitantes",
    imageUri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Acegu%C3%A1%2C_Departamento_de_Cerro_Largo%2C_Uruguay_-_panoramio.jpg/800px-Acegu%C3%A1%2C_Departamento_de_Cerro_Largo%2C_Uruguay_-_panoramio.jpg",
  },
  {
    id: "3",
    title: "PIB, 53.517,90",
    imageUri: "https://cdn-icons-png.flaticon.com/128/8432/8432303.png",
  },
];

export default function Acegua() {
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
          latitude: -31.8665122,
          longitude: -54.1811855,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -31.8665122,
            longitude: -54.1811855,
          }}
          title={"Aceguá"}
          description={
            "Aceguá é um município que localiza-se na fronteira entre Brasil e Uruguai."
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
