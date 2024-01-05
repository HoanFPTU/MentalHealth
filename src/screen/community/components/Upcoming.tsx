import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from '../style';
import {COLOR, IMAGE} from '../../../constants/constant';

export default function Upcoming() {
  return (
    <View style={[style.cBanner, {backgroundColor: '#FCF4E8'}]}>
      <Text style={[style.cTitleSection, {color: COLOR.brown}]}>
        Upcoming Session
      </Text>
      <Text style={[style.cdescSection, {color: COLOR.brown}]}>
        Sahana V.Msc in Clinical Psychology
      </Text>
      <Text
        style={[style.cdescSection, {color: COLOR.brown, fontWeight: '700'}]}>
        7:30PM - 8:30PM
      </Text>
      <View style={style.cButtonBanner}>
        <Text style={[style.TittleButtonBanner, {color: COLOR.primary}]}>
          Join Now
        </Text>
        <Image
          source={IMAGE.CALENDER}
          style={[style.IconButtonBanner, {tintColor: COLOR.primary}]}
        />
      </View>
      <View style={[style.BannerAbsolute, {backgroundColor: '#FEEDDD'}]}></View>
    </View>
  );
}
