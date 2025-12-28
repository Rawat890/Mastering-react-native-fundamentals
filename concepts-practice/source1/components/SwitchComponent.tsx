import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { fontNames } from '../utils/fontfamily';

export default function SwitchComponent() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
      <Text style={styles.text}>Switch</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  switchContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontFamily: fontNames.bold,
    fontSize: 18,
  }
});