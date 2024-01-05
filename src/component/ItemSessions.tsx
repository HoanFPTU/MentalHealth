import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, IMAGE} from '../constants/constant';
import {style} from './style';
type PropsItemsessions = {
  text1: string;
  text2: string;
  avt: any;
};
export default function ItemSessions({text1, text2, avt}: PropsItemsessions) {
  return (
    <View style={style.cSection}>
      <View style={style.cHeaderSection}>
        <View style={style.containeravatar}>
          <Image source={avt} style={style.avatar} />
        </View>
        <View>
          <Text>Sahana V</Text>
          <Text>Msc in Clinical Psychology</Text>
        </View>
      </View>
      <View style={{marginTop: 16, flexDirection: 'row', gap: 20}}>
        <View style={style.cTimeSection}>
          <Image
            source={IMAGE.CALENDER}
            style={[style.ImgTimeSection]}
            tintColor={'gray'}
          />
          <Text> 31st March '22</Text>
        </View>
        <View style={style.cTimeSection}>
          <Image
            source={IMAGE.CALENDER}
            style={[style.ImgTimeSection]}
            tintColor={'gray'}
          />
          <Text> 7:30 PM - 8:30 PM</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 12, gap: 16}}>
        <TouchableOpacity style={style.cButtonSection}>
          <Text style={style.TextButtonSection}>{text1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.cButtonSection, {backgroundColor: undefined}]}>
          <Text style={[style.TextButtonSection, {color: COLOR.primary}]}>
            {text2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
