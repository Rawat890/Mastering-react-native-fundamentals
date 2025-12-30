import { fontNames } from '@/source1/utils/fontfamily';
import React from 'react';
import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

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

export default function TextButton({ label, mode, onPress, disabled, onPressIn, onPressOut, textColor, buttonColor, style }: TextButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Button mode={mode} onPress={onPress} disabled={disabled} style={[{ backgroundColor: buttonColor, padding: 10 }, style]} labelStyle={[styles.labelStyle, {color: textColor }]}>
        {label}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 12,
    marginVertical: 15,
  },
  labelStyle: { fontSize: 20, fontFamily: fontNames.bold}
})