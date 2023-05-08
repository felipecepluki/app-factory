import React from "react";
import MapView from "react-native-maps";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Button title="Brasilia" onPress={() => {}} />
        <Button title="Sao Paulo" onPress={() => {}} />
      </View>
      <MapView
        style={styles.map}
        region={{
          latitude: -23.5492243,
          longitude: -46.5813785,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: 500,
  },
});
