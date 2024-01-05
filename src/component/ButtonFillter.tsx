import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {style} from './style';
import {COLOR} from '../constants/constant';
type Props = {
  content: string;
  active: boolean;
  onPress: Function;
  index: number;
};
export const ButtonFillter = memo(
  ({content, active, onPress, index}: Props) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(index)}
        style={[
          style.cButtonFillter,
          {backgroundColor: active ? COLOR.primary : COLOR.gray},
        ]}>
        <Text
          style={[
            style.TextButtonFillter,
            {color: active ? COLOR.white : '#625950'},
          ]}>
          {content}
        </Text>
      </TouchableOpacity>
    );
  },
);
