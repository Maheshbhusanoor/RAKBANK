/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import colors from '../../themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  source: string;
  name?: string;
}

export function TabIcon(props: Props) {
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: 50,
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name={props.source} size={28} color={'#000'} />
      </View>
      <Text
        style={{
          color: colors.inactiveTabColor,
          fontSize: 12,
        }}>
        {props.name}
      </Text>
    </View>
  );
}
