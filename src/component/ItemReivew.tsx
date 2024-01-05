import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLOR, ICON, IMAGE} from '../constants/constant';
import {style} from './style';
type PropsItemReview = {
  url: any;
  name: string;
  time: string;
  content: string;
  countLike: number;
  countcmt: number;
};
export default function ItemReivew({
  content,
  countLike,
  countcmt,
  name,
  time,
  url,
}: PropsItemReview) {
  const [liked, setLiked] = useState<boolean>(false);
  const [countLiked, setCountLiked] = useState<number>(countLike);
  return (
    <View style={style.cItemReview}>
      <Image source={url} style={style.avatar} />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
          <Text style={{color: COLOR.brown, fontWeight: '700', fontSize: 16}}>
            {name}
          </Text>

          <Text>▪ {time}</Text>
        </View>
        <Text
          style={{
            color: COLOR.brown,
            marginTop: 8,
            marginBottom: 16,
            fontWeight: '500',
            paddingRight: 32,
          }}>
          {content}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              marginRight: 16,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                liked
                  ? setCountLiked(countLiked - 1)
                  : setCountLiked(countLiked + 1);
                setLiked(!liked);
              }}>
              <Image
                source={IMAGE.LIKE}
                style={{height: 20, width: 20}}
                tintColor={liked ? COLOR.primary : undefined}
              />
            </TouchableOpacity>
            <Text>{countLiked}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              marginRight: 16,
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image source={IMAGE.CMT} style={{height: 20, width: 20}} />
            </TouchableOpacity>
            <Text>{countcmt}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Image source={IMAGE.SHARE} style={{height: 20, width: 20}} />
          </View>
        </View>
      </View>
    </View>
  );
}
