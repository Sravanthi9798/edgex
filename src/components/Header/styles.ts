import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { normalize } from '@/constants/normalize';

const styles = StyleSheet.create({
  container: {
    height: normalize(58),
    backgroundColor: Colors.Primary,
    borderBottomLeftRadius: normalize(16),
    borderBottomRightRadius: normalize(16),

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: normalize(16),
  },

  sideContainer: {
    width: normalize(40),
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftContainer: {
    alignItems: 'flex-start',
  },

  rightContainer: {
    alignItems: 'flex-end',
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize(8),
  },

  title: {
    color: Colors.White,
    fontSize: normalize(30),
    fontWeight: '700',
  },
});

export default styles;
