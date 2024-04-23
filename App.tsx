import React from 'react'; 
import Cardapio from './src/Cardapio';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/screens/CadastroClientes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='CadastroProdutos' component={CadastroProduto}
        options={{headerShown: false}}/>
        <Stack.Screen name ='CadastroClientes' component={CadastroCliente}
        options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  
  
    );
}




export default App;