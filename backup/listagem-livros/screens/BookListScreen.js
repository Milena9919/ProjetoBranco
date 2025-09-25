import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const livros = [
  { id: "1", titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
  { id: "2", titulo: "1984", autor: "George Orwell" },
  { id: "3", titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
  { id: "4", titulo: "Dom Quixote", autor: "Miguel de Cervantes" },
];

export default function BookListScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.autor}>{item.autor}</Text>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("DetalhesLivro", { livro: item })}
            >
              <Text style={styles.textoBotao}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  titulo: { fontSize: 18, fontWeight: "bold" },
  autor: { fontSize: 14, color: "#666", marginBottom: 8 },
  botao: {
    backgroundColor: "#2196F3",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  textoBotao: { color: "#fff", fontWeight: "bold" },
});
