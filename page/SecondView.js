import {  StyleSheet, Text, View } from "react-native"
import { Button, Switch } from 'react-native-paper';
import * as React from 'react';






function SecondView({navigation}) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (

    
    <View style={styles.containerFlex}>
<Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      
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
