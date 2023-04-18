import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, TextInput, View, Image } from "react-native"
import { Button } from 'react-native-paper';

const HomeView = ({navigation}) => {
  
    const [enteredTodo, setEnteredTodo] = useState('test')

    const changeTextHandler = (pEnteredTodo) => {
        setEnteredTodo(pEnteredTodo)
    }

    const changeTodoHandler = () => {
        console.log(enteredTodo)
    }

    return (
        <View style={styles.containerFlex}>
            <View style={styles.blueFlexItem}>
                <Text>Blue</Text>
            </View>
            <View style={styles.greenFlexItem}>
              <View style={styles.img}>
                
                <Image style={styles.Image1} src={'./test.png'}></Image>
                <Image style={styles.Image2} src={''}></Image>
                
              </View>
              <View style={styles.img}>
                
                <Image style={styles.Image2} src={''}></Image>
                <Image style={styles.Image1} src={''}></Image>
                
              </View>
              <View style={styles.bout}>
                <Text>{enteredTodo}</Text>
                <TextInput
                    placeholder='Entrer nouvelle valeur de state'
                    onChangeText={changeTextHandler}
                />
                <Button
                    icon="home" mode="contained"
                    onPress={changeTodoHandler}
                    >
                      titre
                    </Button>
              </View>
            </View>
            <View style={styles.menu} >
              <Button
                    icon="home" mode="contained"
                    onPress={() => {navigation.navigate('Accueil')}}>
                      home
                    </Button>
                    <Button
                    icon="home" mode="contained"
                    onPress={() => {navigation.navigate('Second')}}>
                      page 2
              </Button>
            </View>

            <StatusBar style="auto" />
        </View>
    )
}

export default HomeView


const styles = StyleSheet.create({
    containerFlex: {
      flex: 100,
    },
    blueFlexItem: {
      flex: 5,
      backgroundColor: 'blue'
    },
    greenFlexItem: {
      flex: 80,
      justifyContent: 'center',
      alignItems: 'center'
    },
    menu: {
      flexDirection: "row",
      flex: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    bout:{
      flex: 40,
    } ,
    img: {
      flexDirection: "row",
      flex: 40,
      backgroundColor: 'red',
    },
    Image1: {
      flex: 10,
      backgroundColor: 'white',
    },
    Image2: {
      flex: 10,
      backgroundColor: 'black',
    },
  });
  