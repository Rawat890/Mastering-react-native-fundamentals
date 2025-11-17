import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  StyleProp,
  Platform,
  Animated,
  Easing,
  ColorValue,
} from 'react-native';
import { scale } from "react-native-size-matters";
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface TextButtonProps {
  children?: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
  onLongPress?: (e: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconSpacing?: number;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<TextStyle>;
  rippleColor?: ColorValue;
  accessibilityLabel?: string;
  hitSlop?: { top?: number; left?: number; bottom?: number; right?: number };
  debounceTime?: number; // milliseconds to block repeated taps
  testID?: string;
}

/**
 * TextButton
 * - Accessible
 * - Variants (primary, secondary, ghost, danger)
 * - Sizes (small, medium, large)
 * - Loading state
 * - Icons left/right
 * - Press animation
 * - Debounce against double taps (optional)
 */
export default function TextButton({
  children,
  onPress,
  onLongPress,
  loading = false,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  iconLeft,
  iconRight,
  iconSpacing = 8,
  iconSize,
  style,
  contentStyle,
  rippleColor,
  accessibilityLabel,
  hitSlop,
  debounceTime = 300,
  testID,
}: TextButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const lastTapRef = useRef<number>(0);

  // animated animatedScale for press feedback
  const animatedScale = useRef(new Animated.Value(1)).current;

  const disabledOrLoading = disabled || loading;

  const sizes = useMemo(() => {
    return {
      small: {
        paddingVertical: scale(6),
        paddingHorizontal: scale(10),
        fontSize: scale(14),
        minHeight: scale(36),
        iconSize: scale(16),
      },
      medium: {
        paddingVertical: scale(10),
        paddingHorizontal: scale(14),
        fontSize: scale(16),
        minHeight: scale(44),
        iconSize: scale(20),
      },
      large: {
        paddingVertical:
          (14),
        paddingHorizontal: scale(18),
        fontSize: scale(18),
        minHeight: 52,
        iconSize: 24,
      },
    }[size];
  }, [size]);

  const palette = useMemo(() => {
    return {
      primary: {
        background: '#2563eb',
        text: '#ffffff',
      },
      secondary: {
        background: '#e5e7eb',
        text: '#111827',
      },
      ghost: {
        background: 'transparent',
        text: '#2563eb',
      },
      danger: {
        background: '#dc2626',
        text: '#ffffff',
      },
    }[variant];
  }, [variant]);

  const resolvedIconSize = iconSize ?? sizes.iconSize;

  const startPressAnimation = useCallback(() => {
    Animated.timing(animatedScale, {
      toValue: 0.98,
      duration: 120,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [animatedScale]);

  const releasePressAnimation = useCallback(() => {
    Animated.timing(animatedScale, {
      toValue: 1,
      duration: 180,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [animatedScale]);

  const handlePress = useCallback(
    (e: GestureResponderEvent) => {
      const now = Date.now();
      if (debounceTime > 0 && now - lastTapRef.current < debounceTime) return;
      lastTapRef.current = now;
      if (disabledOrLoading) return;
      onPress?.(e);
    },
    [onPress, debounceTime, disabledOrLoading]
  );

  const handlePressIn = useCallback(() => {
    if (disabledOrLoading) return;
    setIsPressed(true);
    startPressAnimation();
  }, [disabledOrLoading, startPressAnimation]);

  const handlePressOut = useCallback(() => {
    setIsPressed(false);
    releasePressAnimation();
  }, [releasePressAnimation]);

  const contentColor = disabledOrLoading
    ? '#9ca3af'
    : palette.text;

  const containerBackground = variant === 'ghost' ? 'transparent' : palette.background;

  // rippleColor fallback for Android
  const androidRipple = useMemo(() => ({
    color: rippleColor ?? (variant === 'ghost' ? '#e5e7eb' : '#ffffff'),
    borderless: false,
  }), [rippleColor, variant]);

  return (
    <Animated.View
      style={[
        { transform: [{ scale: animatedScale }] },
        styles.wrapper,
        disabledOrLoading && styles.wrapperDisabled,
      ]}
    >
      <Pressable
        testID={testID}
        accessible
        accessibilityRole="button"
        accessibilityState={{ disabled: disabledOrLoading, busy: !!loading }}
        accessibilityLabel={accessibilityLabel}
        hitSlop={hitSlop}
        onPress={handlePress}
        onLongPress={onLongPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        android_ripple={Platform.OS === 'android' ? androidRipple : undefined}
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: containerBackground,
            paddingVertical: sizes.paddingVertical,
            paddingHorizontal: sizes.paddingHorizontal,
            minHeight: sizes.minHeight,
            opacity: disabledOrLoading ? 0.8 : 1,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: variant === 'secondary' ? 1 : 0,
            borderColor: variant === 'secondary' ? '#d1d5db' : 'transparent',
          },
          style,
        ]}
        disabled={disabledOrLoading}
      >
        {/* loading spinner */}
        {loading ? (
          <ActivityIndicator
            size="small"
            color={contentColor as any}
            style={{ marginRight: 8 }}
          />
        ) : null}

        {/* left icon */}
        {iconLeft ? (
          <View style={{ marginRight: iconSpacing }}>{
            // If icon is a function/component, render it with size prop support
            // otherwise render as node
            typeof iconLeft === 'function'
              ? (React.createElement(iconLeft as any, { width: resolvedIconSize, height: resolvedIconSize }))
              : iconLeft
          }</View>
        ) : null}

        {/* content */}
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            styles.text,
            { color: contentColor, fontSize: sizes.fontSize },
            contentStyle,
          ]}
        >
          {children}
        </Text>

        {/* right icon */}
        {iconRight ? (
          <View style={{ marginLeft: iconSpacing }}>{
            typeof iconRight === 'function'
              ? (React.createElement(iconRight as any, { width: resolvedIconSize, height: resolvedIconSize }))
              : iconRight
          }</View>
        ) : null}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    marginHorizontal: scale(20),
  },
  wrapperDisabled: {
    opacity: 0.85,
  },
  container: {
    // base container reset
  },
  text: {
    fontWeight: '600',
  },
});

// USAGE EXAMPLES (copy into your screen/component):
/*
import TextButton from '../components/TextButton';
import DocumentIcon from '../assets/icons/document.svg';

<TextButton
  variant="primary"
  size="medium"
  onPress={() => console.log('pressed')}
  iconLeft={<DocumentIcon width={18} height={18} />}
>
  Create Note
</TextButton>

<TextButton variant="ghost" size="small" loading>
  Loading...
</TextButton>
*/