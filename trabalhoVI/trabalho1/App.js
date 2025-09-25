import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Início</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Configurações</Text>
    </View>
  );
}


export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Configurações" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}