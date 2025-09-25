import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetalhesRoute = RouteProp<RootStackParamList, 'Detalhes'>;
type DetalhesNav = NativeStackNavigationProp<RootStackParamList, 'Detalhes'>;

type Props = {
  route: DetalhesRoute;
};

export default function DetalhesLivro({ route }: Props) {
  const navigation = useNavigation<DetalhesNav>();
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{livro.titulo}</Text>
      <Text style={styles.autor}>{livro.autor}</Text>
      <Image source={{ uri: livro.imagem }} style={styles.imagem} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  autor: { fontSize: 18, marginBottom: 16 },
  imagem: { width: 200, height: 300, marginBottom: 20, borderRadius: 8 },
});
