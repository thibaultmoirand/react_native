import {  StyleSheet, Text, View } from "react-native"
import { Button } from 'react-native-paper';

function SecondView({navigation}) {
  return (
    <View style={styles.containerFlex}>
        <Text>Welcome to the second screen</Text>
        <View style={styles.nav} >
        <Button icon="home" mode="contained" onPress={() => {navigation.navigate('Accueil')}}>
            Go to Accueil
            </Button>
            </View>
    </View>
    
  )
}

export default SecondView



const styles = StyleSheet.create({
  containerFlex: {
    flex: 100,
  },
  nav: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
