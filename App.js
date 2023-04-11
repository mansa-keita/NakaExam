import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from './DetailsScreens';
import HomeScreen from './HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavriteScreen from './FavriteScreen';

import { Provider } from 'react-redux';
import store from './Store';






 

const Stack = createNativeStackNavigator();


export default function App() {




  return (
    <>




          <Provider store={store} >

            
    <NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Deatils" component={DetailsScreen} />
    <Stack.Screen name="Favarite" component={FavriteScreen} />


  </Stack.Navigator>
</NavigationContainer>
      

          </Provider>
   
    
    

  



      
      <StatusBar style="auto" />
    </>

  );
}

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
