import { StyleSheet } from 'react-native';
import { normalize } from '@/constants/normalize';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: normalize(48),
    paddingHorizontal: normalize(16),
    borderRadius: normalize(8),
    backgroundColor: '#003B7A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pressed: {
    opacity: 0.85,
  },

  disabled: {
    backgroundColor: '#A8B8C9',
  },

  secondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#003B7A',
  },

  text: {
    color: '#FFFFFF',
    fontSize: normalize(14),
    fontWeight: '600',
    textAlign: 'center',
  },

  secondaryText: {
    color: '#003B7A',
  },

  iconContainer: {
    marginRight: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
