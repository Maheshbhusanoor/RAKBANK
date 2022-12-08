import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container, ButtonTitle} from './styles';

export function Button({
  title,
  background,
  top,
  onPress,
  disabled,
  loading,
}: {
  title?: string;
  background?: boolean;
  top?: string;
  onPress?: any;
  disabled?: boolean;
  loading?: boolean;
}) {
  return (
    <Container
      onPress={() => typeof onPress === 'function' && onPress()}
      background={background}
      top={top}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color="yellow" />
      ) : (
        <ButtonTitle background={background}>{title}</ButtonTitle>
      )}
    </Container>
  );
}
