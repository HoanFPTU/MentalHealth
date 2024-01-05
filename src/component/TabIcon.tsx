import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/constant';
type PropsTabIcon = {
  url: any;
  focus: boolean;
};
export default function TabIcon({url, focus}: PropsTabIcon) {
  return (
    <View>
      <Image
        source={url}
        tintColor={focus ? COLOR.primary : 'black'}
        style={{height: 30, width: 30}}
      />
    </View>
  );
}
