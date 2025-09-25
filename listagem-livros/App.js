import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Lista fixa de livros
const livros = [
  { id: "1", titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", imagem: "https://via.placeholder.com/150" },
  { id: "2", titulo: "1984", autor: "George Orwell", imagem: "https://via.placeholder.com/150" },
  { id: "3", titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", imagem: "https://via.placeholder.com/150" },
  { id: "4", titulo: "Dom Quixote", autor: "Miguel de Cervantes", imagem: "https://via.placeholder.com/150" },
];

// Tela de Lista de Livros
function ListaDeLivros({ navigation }) {
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
              onPress={() => navigation.navigate("Detalhes", { livro: item })}
            >
              <Text style={styles.textoBotao}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// Tela de Detalhes do Livro
function DetalhesDoLivro({ route, navigation }) {
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{livro.titulo}</Text>
      <Text style={styles.autor}>{livro.autor}</Text>
      <Image source={{ uri: livro.imagem }} style={styles.imagem} />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Navegação
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={ListaDeLivros} options={{ title: "Lista de Livros" }} />
        <Stack.Screen name="Detalhes" component={DetalhesDoLivro} options={{ title: "Detalhes do Livro" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  autor: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },
  botao: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginVertical: 20,
  },
});
