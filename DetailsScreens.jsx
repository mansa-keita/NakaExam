import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingVie, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DataRecipies } from './data';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';






const DetailsScreen = ()=> {


  const dispatch = useDispatch();




  const addFavorite = (item) => {
    dispatch({ type: 'ADD_FAVORITE', payload: item });
  };




  const navigation = useNavigation()



  const FaviriteScreen = (user) =>{
    addFavorite(user);
    navigation.navigate('Favarite',{user:user} )


  }

  const route = useRoute()

  const {user} = route.params

  return (
    <View style={styles.container}>
                  <Image source={user.image} style={{ width: "100%", height: 200, resizeMode: "contain" , borderRadius: 10, alignSelf: "center", marginTop: 50 }} />

                  <Text style={{alignSelf: "center", marginTop: 10, fontSize: 30, fontWeight: "bold"}} >{user.name}</Text>



                  <View style={{alignSelf: "center", flexDirection: "row"}}>
                  <TouchableOpacity style={{right: 20}}>
                  <AntDesign name="left" size={24} color="black" />
                    
                  </TouchableOpacity>

                  <Text>0</Text>

                  <TouchableOpacity style={{left: 20}} >
                  <AntDesign name="right" size={24} color="black" />
                  </TouchableOpacity>

                  </View>
                 




      <View>


      </View>



      <View style={{height: 300, width: 400, alignItems: "center", borderColor: "black", borderWidth: 1, alignSelf: "center", marginTop: 50, borderRadius: 10}} >
        <Text style={{fontSize: 20, fontWeight: "bold"}} >The patty is usually seasoned with salt and pepper, and may also contain other flavorings such as Worcestershire sauce, garlicpickles, cheese, and condiments such as ketchup, mustard, or mayonnaise are preparedOnce the patty is cooked, it is placed on the bottom half of the bun and topped with the prepared toppings and condiments. The top half of the bun is then placed on top of the burger, completing the sandwic, or onion "</Text>
      </View>



      <TouchableOpacity  onPress={()=>FaviriteScreen(user)}  style={{marginTop: 20, alignSelf: 'center', height: 50, width: 150, borderWidth: 1, borderColor: "black", alignItems: "center", justifyContent: "center", backgroundColor:"#fab47e", borderRadius: 10}}>
        <Text>Save To favorite</Text>
      </TouchableOpacity>
  


   



      </View>


  



      
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({

  container:{
    backgroundColor: "#f4f0efs"
  } 
});




