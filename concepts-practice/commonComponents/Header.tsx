import { fontNames } from '@/utils/fontfamily';
import * as React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

interface HeaderProps {
  title: string;
  subtitle?: string;

  showBackAction?: boolean;
  onBackPress?: () => void;

  rightIcon?: string;
  onRightIconPress?: () => void;

  elevated?: boolean;
}

export default function Header({
  title,
  subtitle,
  showBackAction = false,
  onBackPress,
  rightIcon,
  onRightIconPress,
  elevated = true,
}: HeaderProps) {
  const theme = useTheme();

  return (
    <Appbar.Header elevated={elevated} statusBarHeight={0}
>
      {/* Left */}
      {showBackAction && (
        <Appbar.BackAction
          onPress={onBackPress}
          accessibilityLabel="Go back"
        />
      )}

      {/* Title */}
      <Appbar.Content
        title={title}
        subtitle={subtitle}
        titleStyle={{ fontWeight: '600' , textAlign: 'center', fontFamily: fontNames.semiBold}}
      />

      {/* Right */}
      {rightIcon && (
        <Appbar.Action
          icon={rightIcon}
          onPress={onRightIconPress}
          accessibilityLabel="Header action"
        />
      )}
    </Appbar.Header>
  );
}
