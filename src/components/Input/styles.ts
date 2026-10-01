import { StyleSheet } from 'react-native';
import { normalize } from '@/constants/normalize';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: normalize(48),

    borderWidth: 1,
    borderColor: '#D9E0E8',

    borderRadius: normalize(8),

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
  },

  isFocusBorder: {
    borderColor: '#1683F8',
  },

  disabled: {
    backgroundColor: '#F3F5F7',
    opacity: 0.7,
  },

  textInput: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: normalize(12),
  },

  renderLeftIcon: {
    width: normalize(24),
    height: normalize(24),

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: normalize(7),
  },

  wrapInput: {
    flex: 1,

    height: '100%',

    justifyContent: 'center',
  },

  input: {
    flex: 1,

    height: '100%',

    paddingHorizontal: 0,
    paddingVertical: 0,

    margin: 0,

    color: '#17243A',

    fontSize: normalize(13),

    includeFontPadding: false,
  },

  renderRightIcon: {
    width: normalize(24),
    height: normalize(24),

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: normalize(7),
  },

  textError: {
    marginTop: normalize(5),

    marginLeft: normalize(2),

    color: '#E53935',

    fontSize: normalize(11),

    lineHeight: normalize(16),
  },
});
