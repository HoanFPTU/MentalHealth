import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/constant';

export const style = StyleSheet.create({
  cReview: {
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
  cReviewTittle: {
    fontSize: 20,
    color: COLOR.brown,
    fontWeight: '700',
    marginBottom: 16,
  },
  cCreateReview: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: COLOR.primary,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
