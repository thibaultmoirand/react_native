import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

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

              </View>
              <View style={styles.img}>
                <Text>{enteredTodo}</Text>
                <TextInput
                    placeholder='Entrer nouvelle valeur de state'
                    onChangeText={changeTextHandler}
                />
                <Button
                    onPress={changeTodoHandler}
                    title='Create todo' />
              </View>
            </View>
            <View style={styles.yellowFlexItem} >
            <Button
                    onPress={() => {navigation.navigate('Second')}}
                    title='Go to second page' />
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
    yellowFlexItem: {
      flex: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
      flex: 50,
    },
    Image1: {
      flex: 10,
    },
    Image2: {
      flex: 10,
    },
  });
  