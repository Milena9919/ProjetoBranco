import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>🏠 Home</Text>
      <Button
        title="Ir para Detalhes (produtoId = 42)"
        onPress={() => navigation.navigate('Detalhes', { produtoId: 42 })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { produtoId } = route.params; // recebendo parâmetro

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>📦 Detalhes do produto: {produtoId}</Text>
      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>👤 Perfil</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
