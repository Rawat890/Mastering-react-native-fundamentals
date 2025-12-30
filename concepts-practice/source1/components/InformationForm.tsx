import Header from '@/commonComponents/Header'
import InputWithLabel from '@/commonComponents/InputWithLabel'
import TextButton from '@/commonComponents/TextButton'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, StyleSheet, View } from 'react-native'
import { InformationFormSchema } from '../schemas/InformationFormSchema'

type InformationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  nationality: string;
  pincode: string;
  highestEducationLevel: string;
  yearOfGraduation: string;
};

export default function InformationForm() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InformationFormData>({
    resolver: yupResolver(InformationFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      nationality: '',
      pincode: '',
      highestEducationLevel: '',
      yearOfGraduation: '',
    },
  });

  const onSubmit = (data: InformationFormData) => {
    console.log('Form Data:', data);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title='Information Collection Form' />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              placeholder="Enter first name"
              value={value}
              onChangeText={onChange}
              error={errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              placeholder="Enter last name"
              value={value}
              onChangeText={onChange}
              error={errors.lastName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              placeholder="Enter email address"
              value={value}
              onChangeText={onChange}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              placeholder="Enter phone number"
              value={value}
              onChangeText={onChange}
              keyboardType='phone-pad'
              error={errors.phoneNumber?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              placeholder="Enter password"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
              error={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              placeholder="Enter confirm password"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
              error={errors.confirmPassword?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='addressLine1'
          render={({ field: { onChange, value } }) => (
            <InputWithLabel
              placeholder="Enter address line 1"
              value={value}
              onChangeText={onChange}
              error={errors.addressLine1?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='addressLine2'
          render={({ field: { onChange, value } }) => (
            <InputWithLabel placeholder='Enter address line 2' error={errors.addressLine2?.message} onChangeText={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          name='city'
          render={({ field: { onChange, value } }) => (
            <InputWithLabel placeholder='Enter city' error={errors.city?.message} onChangeText={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          name='state'
          render={({ field: { onChange, value } }) => (
            <InputWithLabel placeholder='Enter state' error={errors.state?.message} onChangeText={onChange} value={value} />

          )}
        />
        <Controller
          control={control}
          name='nationality'
          render={({ field: { onChange, value } }) => (
            <InputWithLabel placeholder='Enter nationality' error={errors.nationality?.message} onChangeText={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          name='pincode'
          render={({ field: { onChange, value } }) => (
            <InputWithLabel placeholder='Enter pincode' error={errors.pincode?.message} onChangeText={onChange} value={value} keyboardType='phone-pad'/>
          )}
        />
        <Controller
          control={control}
          name='highestEducationLevel'
          render={({ field: { onChange, value } }) => (
            <InputWithLabel placeholder='Enter highest education level'error={errors.highestEducationLevel?.message} onChangeText={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          name='yearOfGraduation'
          render={({ field: { onChange, value } }) => (
            <InputWithLabel placeholder='Enter year of graduation/Post-graduation'error={errors.yearOfGraduation?.message} onChangeText={onChange} value={value} keyboardType='phone-pad'/>
          )}
        />

        <TextButton mode='contained' label='Submit Data' textColor='red' buttonColor='blue' onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 10,
    paddingBottom: 30
  }
})