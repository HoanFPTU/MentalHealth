import {StyleSheet} from 'react-native';
import {COLOR} from '../constants/constant';

export const style = StyleSheet.create({
  // header
  containerHeader: {
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    // backgroundColor: 'red',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 16,
  },
  containeravatar: {
    height: 42,
    width: 42,
    borderWidth: 3,
    borderColor: '#D7B497',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 33,
    width: 33,
    borderRadius: 50,
  },
  notification: {height: 33, width: 33, tintColor: COLOR.brown},
  numNotifications: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: COLOR.primary,
    height: 20,
    width: 20,
    borderRadius: 50,
    textAlign: 'center',
    color: COLOR.white,
  },
  // EmotionItem
  cEmotionItem: {marginRight: 20},
  cEmotionButton: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,

    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cEmotionImg: {width: 40, height: 40},
  cEmotionName: {alignSelf: 'center', marginTop: 4},
  // Sections
  cSection: {
    backgroundColor: '#FEEDDD',
    marginBottom: 12,
    padding: 20,
    borderRadius: 20,
  },
  cHeaderSection: {
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 0.2,
    borderBottomColor: '#766E66',
    paddingBottom: 8,
  },
  cTimeSection: {flexDirection: 'row', gap: 8},
  TextTimesection: {},
  ImgTimeSection: {height: 16, width: 16},
  cButtonSection: {
    backgroundColor: COLOR.primary,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 12,
    width: 120,
  },
  TextButtonSection: {
    color: COLOR.white,
    fontWeight: '700',
    textAlign: 'center',
  },
  // button fillter
  cButtonFillter: {
    marginRight: 16,
    alignSelf: 'flex-start',
    height: 45,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  TextButtonFillter: {
    fontWeight: '500',
    fontSize: 16,
  },
  // ItemReview
  cItemReview: {
    flexDirection: 'row',
    gap: 16,
    borderBottomColor: COLOR.gray,
    borderBottomWidth: 0.5,
    paddingBottom: 16,
    marginBottom: 16,
    width: '100%',
  },
});
