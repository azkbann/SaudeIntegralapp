import {createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome';
import Telalogin from '../pages/Telalogin';
import Inicial from '../pages/Inicial';
import Perfil from '../pages/Perfil';
import Agconsultas from '../pages/Agconsultas';
import Monitor from '../pages/Monitor';
import Suporte from '../pages/Suporte';
import Emocao from '../pages/Emocao';
import AgendamentosHistorico from '../pages/AgendamentosHistorico';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
            <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Telalogin"
            component={Telalogin}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Inicial"
            component={Inicial}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="AgendamentosHistorico"
            component={AgendamentosHistorico}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Emocao"
            component={Emocao}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Agconsultas"
            component={Agconsultas}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Monitor"
            component={Monitor}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Suporte"
            component={Suporte}
            options={{ headerShown: false }}
            />
            </Stack.Navigator>
    )
}
