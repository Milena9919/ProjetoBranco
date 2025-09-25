import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaLivros from './app/ListarLivros';
import DetalhesLivro from './app/DetalhesLivros';

export type RootStackParamList = {
  Lista: undefined;
  Detalhes: { livro: { titulo: string; autor: string; imagem: string } };
};

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={ListaLivros} options={{ title: "Lista de Livros" }} />
        <Stack.Screen name="Detalhes" component={DetalhesLivro} options={{ title: "Detalhes do Livro" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
