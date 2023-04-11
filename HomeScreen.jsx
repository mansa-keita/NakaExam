
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';



const DataRecipies = [

  {
    id: 1,
    name: "Burger",
    image: require("./assets/buga.jpg")
  },
  {
    id: 2,
    name: "Pizza",
    image: require("./assets/pizza.jpg")
  },
  {
    id: 3,
    name: "Fish",
    image: require("./assets/fish.jpg")
  },
  {
    id: 4,
    name: "Super",
    image: require("./assets/super.webp")
  },
  {
    id: 5,
    name: "Bread",
    image: require("./assets/bread.jpg")
  },
  {
    id: 6,
    name: "Vigitables",
    image: require("./assets/viigitables.jpg")
  },
  {
    id: 7,
    name: "Yasa",
    image: require("./assets/yasa.jpg")
  }
 
 

]

const HomeScreen = ()=>{
  const navigation = useNavigation()
  const [query, setQuery] = useState("")

  const handleSearch = (text) => {
    setQuery(text);
  };

  const filteredData =  DataRecipies.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );


  const DetailsScreen = (item)=> {
    navigation.navigate("Deatils",{user:item} )
  }


  return (
    <>
      
   
    
    <View style={styles.container}>
      
      <View style={styles.searchBarContainer}>
        <TextInput
          onChangeText={handleSearch}
          value={query}
        style={styles.searchInputs}
        placeholder="Please search for your recipe"/>
      </View>

      <View style={{left: 10, top: 20, flexDirection: "row"}} >
      <MaterialIcons name="favorite-border" size={50} color="black" />
      <Text style={{top: 10, left: 10}} >See Your favorite</Text>
      </View>



      <View style={{marginTop: 29, alignItems: "center"}} >
        <Text style={{fontSize: 20, fontWeight: "bold"}} >List Of Recipies</Text>
      </View>

      <View style={styles.rexipieContainer} >
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TouchableOpacity onPress={()=>DetailsScreen(item)} style={styles.recipiecard} >
           <Image source={item.image} style={{ width: "95%", height: 200, resizeMode: "contain" , borderRadius: 10, alignSelf: "center", }} />
          <Text style={{fontSize: 25, left: 20, fontWeight: "bold"}} >{item.name}</Text>
        </TouchableOpacity>}
      />

      </View>


  



      
      <StatusBar style="auto" />
    </View></>

  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
   
  },
  searchBarContainer: {
    marginTop: 50,
    alignItems: "center"
  },
  searchInputs:{
    height: 40,
    borderColor: "#f2d9d4",
     borderWidth: 1,
     width: "90%",
     borderRadius: 10,
  },
  rexipieContainer:{

  }, 
  recipiecard:{
    alignSelf: "center",
    width: "100%",
    marginTop: 10,
    borderRadius: 10,

  }
});
