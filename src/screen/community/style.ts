import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/constant';

export const style = StyleSheet.create({
  cCommunity: {
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
  //   banner popular
  cBanner: {
    marginTop: 12,
    padding: 20,
    borderRadius: 20,
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

  BannerAbsolute: {
    borderRadius: 1000,
    height: 500,
    width: 500,
    position: 'absolute',
    bottom: -470,
    right: -250,
  },
  // Sessions
  cSessions: {marginTop: 16, flex: 1},
  cFilterSessions: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  TitleFilter: {fontSize: 20, fontWeight: '500', color: COLOR.brown},
  ImageFilter: {height: 20, width: 20},
});
