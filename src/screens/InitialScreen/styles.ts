import { normalize } from '@/constants/normalize';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FBFF',
  },

  content: {
    flex: 1,
    paddingHorizontal: normalize(28),
  },

  // Logo
  logoContainer: {
    alignItems: 'center',
    marginTop: normalize(55),
  },

  logoText: {
    fontSize: normalize(50),
    fontWeight: '800',
    color: '#062F6E',
    letterSpacing: normalize(-2),
  },

  logoBlue: {
    color: '#1688E8',
  },

  subtitle: {
    marginTop: normalize(8),
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalize(20),
    color: '#5E6B7E',
    fontWeight: '500',
  },

  // Features
  featuresContainer: {
    marginTop: normalize(30),
    gap: normalize(20),
  },

  feature: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
    backgroundColor: '#E8F5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(12),
  },

  featureTitle: {
    fontSize: normalize(14),
    fontWeight: '700',
    color: '#0A4A91',
  },

  featureDescription: {
    fontSize: normalize(13),
    color: '#4A5568',
    marginTop: normalize(1),
  },

  // Building
  imageContainer: {
    height: height * 0.27,
    marginHorizontal: normalize(-28),
    marginTop: normalize(18),
    overflow: 'hidden',
  },

  buildingImage: {
    width: '100%',
    height: '100%',
  },

  // Buttons
  buttonsContainer: {
    marginTop: 'auto',
    gap: normalize(9),
    paddingBottom: normalize(60),
  },

  signInButton: {
    height: normalize(46),
    borderRadius: normalize(9),
    backgroundColor: '#063B86',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInText: {
    color: '#FFFFFF',
    fontSize: normalize(14),
    fontWeight: '700',
  },

  signUpButton: {
    height: normalize(46),
    borderRadius: normalize(9),
    backgroundColor: '#FFFFFF',
    borderWidth: normalize(1.5),
    borderColor: '#6B91C4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpText: {
    color: '#063B86',
    fontSize: normalize(14),
    fontWeight: '700',
  },

  // Bottom waves
  bottomWaveOne: {
    position: 'absolute',
    bottom: normalize(-75),
    left: normalize(-80),
    width: width * 0.9,
    height: normalize(120),
    borderRadius: normalize(100),
    backgroundColor: '#063B86',
    transform: [
      {
        rotate: '8deg',
      },
    ],
  },

  bottomWaveTwo: {
    position: 'absolute',
    bottom: normalize(-90),
    right: normalize(-80),
    width: width * 0.9,
    height: normalize(110),
    borderRadius: normalize(100),
    backgroundColor: '#42A5F5',
    transform: [
      {
        rotate: '-8deg',
      },
    ],
  },

});