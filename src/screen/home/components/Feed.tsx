import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {COLOR, FELLING} from '../../../constants/constant';
import EmotionItem from '../../../component/EmotionItem';
import {style} from '../style';

export default function Feed() {
  type FellingItem = {
    name: string;
    url: any;
    backgroundColor: string;
  };
  const dataFelling: FellingItem[] = [
    {name: 'Happy', url: FELLING.HAPPY, backgroundColor: 'pink'},
    {name: 'Calm', url: FELLING.CALM, backgroundColor: '#AEAFF7'},
    {name: 'Manic', url: FELLING.MANIC, backgroundColor: '#9FE3E2'},
    {name: 'Angry', url: FELLING.ANGRY, backgroundColor: '#F09E53'},
    {name: 'Chill', url: FELLING.CHILL, backgroundColor: '#C2F2A5'},
  ];
  return (
    <View>
      <Text style={style.cFeedTitle}>Good Afternoon</Text>
      <Text style={style.cFeedNameUser}>Sarina!</Text>
      <View style={{marginTop: 24}}>
        <Text style={{fontSize: 16, color: COLOR.brownDark}}>
          How are you feeling today?
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={style.cFlatListEmotion}
          horizontal
          data={dataFelling}
          renderItem={({item}) => (
            <EmotionItem
              url={item.url}
              name={item.name}
              backgroundColor={item.backgroundColor}
            />
          )}
        />
      </View>
    </View>
  );
}
