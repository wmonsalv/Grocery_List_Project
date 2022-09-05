import Main from "/Users/william_x1/Documents/GitHub/Grocery_List_Project-test_branch/components/Main.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );



}

