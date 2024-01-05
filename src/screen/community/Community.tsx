import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import Upcoming from './components/Upcoming';
import Section from './components/Section';

export default function Community() {
  return (
    <View style={style.cCommunity}>
      <Upcoming />
      <Section />
    </View>
  );
}
