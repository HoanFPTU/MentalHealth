import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {style} from './style';
import {ButtonFillter} from '../../component/ButtonFillter';
import ItemReivew from '../../component/ItemReivew';
import {COLOR, IMAGE} from '../../constants/constant';

export default function Review() {
  const dataFillter = ['Trending', 'Relationship', 'SelfCare', 'Relevent'];
  // const [dataFillter, setDataFillter] = useState(dataFillterori);
  const [eNumfillter, setENumfillter] = useState(0);
  const onPressFillterButton = (index: number) => {
    setENumfillter(index);
  };
  type PropsReview = {
    url: any;
    name: string;
    time: string;
    content: string;
    countLike: number;
    countcmt: number;
  };
  const dataReview: PropsReview[] = [
    {
      content: ' Is there a therapy which can cure coress dressin123 12332122',
      countcmt: 8,
      countLike: 8,
      name: '  Cocal Dingo',
      time: 'just ago',
      url: IMAGE.AVATAR2,
    },
    {
      content: ' Is there a therapy which can cure coress dressin123 12332122',
      countcmt: 5,
      countLike: 6,
      name: '  Cocal Dingo',
      time: 'just ago',
      url: IMAGE.AVATAR3,
    },
    {
      content: ' Is there a therapy which can cure coress dressin123 12332122',
      countcmt: 112,
      countLike: 12,
      name: '  Cocal Dingo',
      time: 'just ago',
      url: IMAGE.AVATAR5,
    },
    {
      content: ' Is there a therapy which can cure coress dressin123 12332122',
      countcmt: 33,
      countLike: 67,
      name: '  Cocal Dingo',
      time: 'just ago',
      url: IMAGE.AVATAR,
    },
    {
      content: ' Is there a therapy which can cure coress dressin123 12332122',
      countcmt: 78,
      countLike: 78,
      name: '  Cocal Dingo',
      time: 'just ago',
      url: IMAGE.AVATAR3,
    },
  ];
  return (
    <View style={style.cReview}>
      <Text style={style.cReviewTittle}>Wellness Hub</Text>
      {/* Fillter Review */}
      <View>
        <FlatList
          data={dataFillter}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{flexDirection: 'row', paddingTop: 12, paddingBottom: 12}}
          renderItem={({item, index}) => (
            <ButtonFillter
              onPress={onPressFillterButton}
              active={eNumfillter === index}
              content={item}
              index={index}
              key={index}
            />
          )}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: 16}}
        data={dataReview}
        renderItem={({item, index}) => (
          <ItemReivew
            content={item.content}
            countLike={item.countLike}
            countcmt={item.countcmt}
            url={item.url}
            name={item.name}
            time={item.time}
            key={index}
          />
        )}
      />
      <TouchableOpacity style={style.cCreateReview}>
        <Image
          source={IMAGE.EDIT}
          style={{height: 30, width: 30, tintColor: COLOR.white}}
        />
      </TouchableOpacity>
    </View>
  );
}
