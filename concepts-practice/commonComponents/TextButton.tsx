import { fontNames } from '@/source1/utils/fontfamily';
import React from 'react';
import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import Loader from './Loader';

interface TextButtonProps {
  label?: string;
  mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  onPress?: (e: GestureResponderEvent) => void;
  onPressIn?: (e: GestureResponderEvent) => void;
  onPressOut?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  textColor?: string;
  buttonColor?: string;
  style?: object;
}

export default function TextButton({
  label,
  mode,
  onPress,
  disabled,
  textColor,
  buttonColor,
  style,
  loading,
}: TextButtonProps) {

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Button
        mode={mode}
        onPress={onPress}
        disabled={disabled}
        style={[{ backgroundColor: buttonColor }, style]}
        contentStyle={styles.buttonContainer}
        labelStyle={[styles.labelStyle, { color: textColor }]}
      >
        {label}
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonContainer: {
    padding: 2,
    marginVertical: 5,
  },
  labelStyle: { fontSize: 20, fontFamily: fontNames.bold }
})