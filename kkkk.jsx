import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.nav}>
        <View style={styles.navContent}>
          <FontAwesome
            name="chevron-left"
            size={25}
            color="#000"
            style={styles.icon}
          />
          <Text style={styles.texto}>Carrinho de compras</Text>
        </View>
        <Text style={styles.endereco}>Rua Estandarte 108</Text>
      </View>
      <View style={styles.container2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  nav: {
    backgroundColor: "yellow",
    height: "20%",
    width: "100%",
    paddingTop: 40,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
  },
  navContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
  },
  icon: {
    marginRight: 30,
    marginLeft: 20,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  endereco: {
    marginLeft: 30,
    fontSize: 14,
    color: "#333",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
