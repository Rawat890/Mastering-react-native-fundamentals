import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

interface InputWithLabelProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  leftIcon?: string;
  rightIcon?: string;
  maxLength?: number;
  error?: string;
  disabled?: boolean;
}
const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  disabled = false,
  secureTextEntry = false,
  keyboardType = 'default',
  leftIcon,
  rightIcon,
  maxLength,
}
) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  return (
    <View>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        disabled={disabled}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
        maxLength={maxLength}
        error={!!error}
        left={leftIcon ? <TextInput.Icon icon={leftIcon} /> : undefined}
        right={
          secureTextEntry ? (
            <TextInput.Icon
              icon={isSecure ? 'eye-off' : 'eye'}
              onPress={() => setIsSecure(prev => !prev)}
            />
          ) : rightIcon ? (
            <TextInput.Icon icon={rightIcon} />
          ) : undefined
        }
        style={styles.inputContainer}
      />
      {error ? (
        <HelperText type="error" visible={true}>
          {error}
        </HelperText>
      ) : null}

    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    marginVertical: 5,
  }
})

export default InputWithLabel;