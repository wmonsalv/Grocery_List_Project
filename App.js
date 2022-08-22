import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder = "Add Item to the list"/>
        <Button title="Add Item"/>
      </View>
      <View style = {styles.listContainer}>
        <Text>Grocery List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom : 24,
    borderBottomWidth: 1,
    borderBottomColor: "#1e90ff",
    flex : 1
  },
  textInput:{
    borderWidth : 1,
    borderColor: '#cccccc',
    width : "70%",
    padding : 8
  },
  listContainer: {
    flex : 4
  }
});
