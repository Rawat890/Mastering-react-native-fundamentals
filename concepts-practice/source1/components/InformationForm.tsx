import Header from '@/commonComponents/Header'
import InputWithLabel from '@/commonComponents/InputWithLabel'
import TextButton from '@/commonComponents/TextButton'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

export default function InformationForm() {
  return (
    <View style={{ flex: 1 }}>
      <Header title='Information Collection Form' />

      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <InputWithLabel placeholder='Enter first name' />
        <InputWithLabel placeholder='Enter last name' />
        <InputWithLabel placeholder='Enter email address' />
        <InputWithLabel placeholder='Enter phone number' keyboardType='phone-pad' />
        <InputWithLabel placeholder='Enter password' secureTextEntry={true} />
        <InputWithLabel placeholder='Enter confirm password' secureTextEntry={true} />
        <InputWithLabel placeholder='Enter address line 1' />
        <InputWithLabel placeholder='Enter address line 2' />
        <InputWithLabel placeholder='Enter city' />
        <InputWithLabel placeholder='Enter state' />
        <InputWithLabel placeholder='Enter state' />
        <InputWithLabel placeholder='Enter nationality' />
        <InputWithLabel placeholder='Enter pincode' keyboardType='phone-pad' />
        <InputWithLabel placeholder='Enter highest education level' />
        <InputWithLabel placeholder='Enter year of graduation/Post-graduation' />
        <TextButton mode='contained' label='Submit Data' textColor='red' buttonColor='blue'/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 10,
    paddingBottom:30
  }
})