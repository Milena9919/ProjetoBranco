import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BookDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{livro.titulo}</Text>
      <Text style={styles.autor}>{livro.autor}</Text>

      {/* Imagem fictícia */}
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.imagem}
      />

      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  autor: { fontSize: 16, color: "#555", marginBottom: 16 },
  imagem: { width: 150, height: 150, marginBottom: 20 },
  botao: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
  },
  textoBotao: { color: "#fff", fontWeight: "bold" },
});
