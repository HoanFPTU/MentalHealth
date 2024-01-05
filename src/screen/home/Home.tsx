import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import Feed from './components/Feed';
import Body from './components/Body';
import {style} from './style';
import Header from '../../component/Header';

export default function Home() {
  return (
    <SafeAreaView style={style.containerHome}>
      {/* <Header /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Feed />
        <Body />
      </ScrollView>
    </SafeAreaView>
  );
}
