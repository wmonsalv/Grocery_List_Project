import { Image, View, Text, StyleSheet } from "react-native"
import HomeButton from "./HomeButton"

//this is just a test to make sure that I'm on the firebase branch 


function Home({navigation}) {

    return(

        <View style={styles.Background}>
        <Image style={styles.imageEdit} source={require("/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/assets/images/ShoppingList.png")}/>
        <View style={styles.justifyContents} >
        <HomeButton buttonName="Create a List" click={() => navigation.navigate("Make a List")}/>
        <HomeButton buttonName="Login" click={() => navigation.navigate("Login")}/>
        </View>
        </View>
    )
     


}

const styles = StyleSheet.create({
    imageEdit: {
        justifyContent: 'center',
    },
    justifyContents : {
        flex : 2,
        alignItems: "center",
        bottom: 50
    },
    Background: {
        justifycontent:"center",
        alignItems: 'center',
        backgroundColor: "#27963C",
        height: "100%",
        widht: "100"

    }})

export default Home

