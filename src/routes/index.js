import {createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome';
import Signin from '../pages/Signin';
import Home from '../pages/Home/Index'
import Dashboard from '../pages/Dashboard';
import Agendamento from '../pages/Agendamento';
import Monitor from '../pages/Monitor';
import Suporte from '../pages/Suporte';
import Emocao from '../pages/Emocao';


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
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Emocao"
            component={Emocao}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Agendamento"
            component={Agendamento}
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
