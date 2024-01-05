import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {ICON, IMAGE} from '../../../constants/constant';
import {style} from '../style';
import ItemSessions from '../../../component/ItemSessions';

export default function Section() {
  type dataItemSessions = {text1: string; text2: string; avt: any};
  const data: dataItemSessions[] = [
    {text1: 'Reschedule', text2: 'Join Now', avt: IMAGE.AVATAR2},
    {text1: 'Re-book', text2: 'View Profile', avt: IMAGE.AVATAR3},
    {text1: 'Reschedule', text2: 'Join Now', avt: IMAGE.AVATAR4},
    {text1: 'Re-book', text2: 'View Profile', avt: IMAGE.AVATAR5},
  ];
  return (
    <View style={style.cSessions}>
      <View style={style.cFilterSessions}>
        <Text style={style.TitleFilter}>All Sessions</Text>
        <TouchableOpacity>
          <Image source={IMAGE.DOWNARROW} style={style.ImageFilter} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <ItemSessions text1={item.text1} text2={item.text2} avt={item.avt} />
        )}
      />
    </View>
  );
}
