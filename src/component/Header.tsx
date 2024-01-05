import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {IMAGE} from '../constants/constant';
import {style} from './style';

export default function Header() {
  return (
    <View style={style.containerHeader}>
      <TouchableOpacity style={style.containeravatar}>
        <Image style={style.avatar} source={IMAGE.AVATAR} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={style.notification}
          source={IMAGE.NOTIFICATION}
          //   tintColor={COLOR.brown}
        />
        <Text style={style.numNotifications}>1</Text>
      </TouchableOpacity>
    </View>
  );
}
