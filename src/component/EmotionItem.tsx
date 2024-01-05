import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './style';
type PropsEmotionIcon = {
  url: any;
  backgroundColor: string;
  name: string;
};
export default function EmotionItem({
  url,
  backgroundColor,
  name,
}: PropsEmotionIcon) {
  return (
    <View style={style.cEmotionItem}>
      <TouchableOpacity
        style={[style.cEmotionButton, {backgroundColor: backgroundColor}]}>
        <Image source={url} style={style.cEmotionImg} tintColor={'#555'} />
      </TouchableOpacity>
      <Text style={style.cEmotionName}>{name}</Text>
    </View>
  );
}
