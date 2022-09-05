import { Image, View, Text, StyleSheet } from "react-native"
import HomeButton from "./HomeButton"


function Home({navigation}) {

    return(

        <View style={styles.Background}>
        <Image style={styles.imageEdit} source={require("/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/assets/images/ShoppingList.png")}/>
        <HomeButton click={() => navigation.navigate("addPage")}/>
        </View>
    )
     


}

const styles = StyleSheet.create({
    imageEdit: {
        justifyContent: 'center',
    },
    Background: {
        justifycontent:"center",
        alignItems: 'center',
        backgroundColor: "#27963C",
        height: "100%",
        widht: "100"

    }})

export default Home

