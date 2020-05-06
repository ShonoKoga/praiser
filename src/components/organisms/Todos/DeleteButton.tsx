import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/theme';
import IconButton from '../../atoms/IconButton';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.CAUTION,
  },
});

export type RemoveTodo = {
  (id: string): void;
};
type Props = {
  state: {
    id: string;
  };
  actions: {
    removeTodo: RemoveTodo;
  };
};

const Component = (props: Props) => {
  const {
    state: { id },
    actions: { removeTodo },
  } = props;

  const onPress = React.useCallback(() => {
    removeTodo(id);
  }, [id, removeTodo]);

  return <IconButton onPress={onPress} icon="delete" style={styles.button} />;
};

export default Component;
