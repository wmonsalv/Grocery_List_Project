import Main from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/Main.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/Home.js";
import Login from "./components/Login/Login";
import PersonalizedList from "./components/User_list/PersonalizedList";

export default function App() {

    const Stack = createNativeStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen  name="Home" component={Home} />
                    <Stack.Screen  name="Make a List" component={Main} />
                    <Stack.Screen  name="Login" component={Login} />
                    <Stack.Screen  name="User lists" component={PersonalizedList} />
                </Stack.Navigator>
            </NavigationContainer>
           
        );
   
  }
