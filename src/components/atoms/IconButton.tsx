import React from 'react';
import { IconButton } from 'react-native-paper';
import { StyleSheet, ViewStyle } from 'react-native';
import { COLOR } from '../../constants/theme';

const styles = StyleSheet.create({
  button: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 0,
    margin: 0,
  },
});

type Props = {
  icon: string;
  onPress: () => void;
  style: ViewStyle | ViewStyle[];
  iconColor?: string;
  size?: number;
};

const Component = (props: Props) => {
  const { icon, onPress, style, iconColor = COLOR.WHITE, size = 18 } = props;
  return (
    <IconButton
      onPress={onPress}
      color={iconColor}
      size={size}
      style={[styles.button, style]}
      icon={icon}
    />
  );
};

export default Component;
