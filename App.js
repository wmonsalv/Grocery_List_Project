import Main from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/Main.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/Home.js";

export default function App() {

    const Stack = createNativeStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                    <Stack.Screen options={{ headerShown: false }} name="addPage" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>
           
        );
   
  }
