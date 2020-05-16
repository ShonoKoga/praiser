import React from 'react';
import { Avatar as PaperAvatar } from 'react-native-paper';
import { ImageSourcePropType, ViewStyle } from 'react-native';

type Props = {
  size?: number;
  source: ImageSourcePropType;
  style?: ViewStyle | ViewStyle[];
};

const Component = (props: Props) => {
  const { size = 220, source, style } = props;

  return <PaperAvatar.Image size={size} source={source} style={style} />;
};

export default Component;
