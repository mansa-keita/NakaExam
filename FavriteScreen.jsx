import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingVie, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DataRecipies } from './data';
import { AntDesign } from '@expo/vector-icons';


import { useSelector, useDispatch } from 'react-redux';



const FavriteScreen = ()=> {

    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();


    const addFavirite = (item) => {
        dispatch({ type: 'ADD_FAVORITE', payload: item });
    }
     

    const removeFavarited = (item) => {
        dispatch({ type: 'REMOVE_FAVORITE', payload: item });
    }

    const route = useRoute()

    const {user} = route.params
    const [favorite, setFavarite] = useState(user)

console.log(favorites);

  return (

    <>


<View style={styles.container}>
      <Text style={styles.title}>My Favorites:</Text>




        <ScrollView style={{width: "100%"}}>
        {favorites.length > 0 ? (
        favorites.map(item => (
          <View key={item.id} style={styles.item}>
         <Image source={item.image} style={{ width: "100%", height: 200, resizeMode: "contain" , borderRadius: 10, alignSelf: "center", marginTop: 50 }} />

            <View style={{flexDirection: "row", marginTop: 20,}} >
            <Text style={{fontSize: 20, fontWeight: "bold", right: 20}} >{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => removeFavarited(item)}
            >
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text>You have no favorites yet.</Text>
      )}
        </ScrollView>
    </View>


    
    
    </>
    
  



      
  )
}

export default FavriteScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40
      },
      item: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
      },
      button: {
        backgroundColor: '#cfcfcf',
        padding: 8,
        borderRadius: 8,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },

 
});




