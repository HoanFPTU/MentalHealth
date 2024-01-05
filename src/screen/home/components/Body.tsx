import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, IMAGE} from '../../../constants/constant';
import {style} from '../style';

export default function Body() {
  return (
    <View style={style.cBody}>
      <View style={[style.cBanner, {backgroundColor: '#FEF3E7'}]}>
        <View style={{flex: 1}}>
          <Text style={[style.cTitleSection, {color: COLOR.brown}]}>
            1 on 1 Sessions
          </Text>
          <Text
            style={[
              {
                color: COLOR.brown,
              },
              style.cdescSection,
            ]}>
            Let's open up to the things that matter the most
          </Text>
          <View style={style.cButtonBanner}>
            <Text style={[style.TittleButtonBanner, {color: COLOR.primary}]}>
              Book Now
            </Text>
            <Image
              source={IMAGE.CALENDER}
              style={style.IconButtonBanner}
              tintColor={COLOR.primary}
            />
          </View>
        </View>
        <Image
          source={IMAGE.FRIEND}
          tintColor={COLOR.primary}
          style={style.ImageBanner}
        />
        <View
          style={[style.BannerAbsolute, {backgroundColor: '#FEEDDD'}]}></View>
      </View>
      <View style={style.cDocument}>
        <TouchableOpacity style={style.cDocumentItem}>
          <Image
            source={IMAGE.JOURNAL}
            style={style.cDocumentItemImg}
            tintColor={'#D6CCC6'}
          />
          <Text style={style.cDocumentItemText}>Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.cDocumentItem}>
          <Image
            source={IMAGE.LIBRARY}
            style={style.cDocumentItemImg}
            tintColor={'#D6CCC6'}
          />
          <Text style={style.cDocumentItemText}>Library</Text>
        </TouchableOpacity>
      </View>
      <View style={style.cLetter}>
        <Text style={style.LetterTitle}>
          "It is better to conquer yourself than to win thousand battles"
        </Text>
        <Image
          source={IMAGE.QUOTE}
          style={style.LetterImg}
          tintColor={'gray'}
        />
      </View>
      <View
        style={[
          style.cBanner,
          {
            backgroundColor: '#53A06E',
          },
        ]}>
        <View style={{flex: 1}}>
          <Text style={[style.cTitleSection, {color: COLOR.white}]}>
            Plan Expired
          </Text>
          <Text
            style={[
              {
                color: '#DBEADF',
              },
              style.cdescSection,
            ]}>
            Get back chat access and session credits
          </Text>
          <View style={style.cButtonBanner}>
            <Text style={[style.TittleButtonBanner, {color: 'white'}]}>
              Buy More
            </Text>
            <Image
              source={IMAGE.RIGHTARROW}
              style={style.IconButtonBanner}
              tintColor={COLOR.white}
            />
          </View>
        </View>
        <Image
          source={IMAGE.LOTUS}
          tintColor={'#99D9AF'}
          style={style.ImageBanner}
        />
        <View
          style={[style.BannerAbsolute, {backgroundColor: '#72B78A'}]}></View>
      </View>
    </View>
  );
}
