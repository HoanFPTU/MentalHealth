import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/constant';

export const style = StyleSheet.create({
  containerHome: {
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
  // popularBanner
  cBanner: {
    marginTop: 12,

    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 32,
    alignItems: 'center',
    overflow: 'hidden',
  },
  cTitleSection: {fontSize: 24, fontWeight: '700'},
  cdescSection: {
    marginTop: 8,
    lineHeight: 20,
  },
  cButtonBanner: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  TittleButtonBanner: {
    fontSize: 16,
    fontWeight: '700',
  },
  IconButtonBanner: {height: 20, width: 20},
  ImageBanner: {height: 100, width: 100},
  BannerAbsolute: {
    borderRadius: 1000,
    height: 500,
    width: 500,
    position: 'absolute',
    bottom: -470,
    right: -250,
  },

  // feed
  cFeedTitle: {fontSize: 28, color: COLOR.brownDark},
  cFeedNameUser: {fontSize: 28, color: COLOR.brownDark, fontWeight: '700'},
  cFlatListEmotion: {paddingTop: 16, paddingBottom: 16},
  // body
  cBody: {paddingBottom: 20},
  cDocument: {flexDirection: 'row', gap: 24, marginTop: 32},
  cDocumentItem: {
    backgroundColor: '#F4F3F1',
    flexDirection: 'row',

    alignItems: 'center',
    padding: 16,
    gap: 20,
    flex: 1,
    borderRadius: 12,
  },
  cDocumentItemImg: {height: 30, width: 30},
  cDocumentItemText: {color: COLOR.brown, fontWeight: '700', fontSize: 18},
  cLetter: {
    padding: 20,
    backgroundColor: '#F4F3F1',
    borderRadius: 16,
    marginTop: 20,
    flexDirection: 'row',
    gap: 32,

    alignItems: 'center',
  },
  LetterTitle: {fontSize: 16, flex: 1, color: 'gray', fontWeight: '500'},
  LetterImg: {height: 40, width: 40},
});
