import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type ListaNav = NativeStackNavigationProp<RootStackParamList, 'Lista'>;

const livros = [
  { id: '1', titulo: 'Dom Casmurro', autor: 'Machado de Assis', imagem: 'https://via.placeholder.com/200x300?text=Dom+Casmurro' },
  { id: '2', titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', imagem: 'https://via.placeholder.com/200x300?text=Bras+Cubas' },
  { id: '3', titulo: 'O Cortiço', autor: 'Aluísio Azevedo', imagem: 'https://via.placeholder.com/200x300?text=O+Cortico' },
];

export default function ListaLivros() {
  const navigation = useNavigation<ListaNav>();

  return (
    <View style={styles.container}>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.autor}>{item.autor}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('Detalhes', { livro: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { marginBottom: 16, padding: 12, backgroundColor: '#f2f2f2', borderRadius: 8 },
  titulo: { fontSize: 18, fontWeight: 'bold' },
  autor: { fontSize: 16, marginBottom: 8 },
});
