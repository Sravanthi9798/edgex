import { useState } from 'react';
import {
  Pressable,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import Input from '@/components/Input';
import Button from '@/components/Button';

import { styles } from './styles';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'bottom']}
    >
      <View style={styles.content}>

        {/* <Pressable
          style={styles.backButton}
          onPress={() => {}}
        >
          <Ionicons
            name="chevron-back"
            size={22}
            color="#122342"
          />
        </Pressable> */}

        <Text style={styles.title}>
          Welcome Home Screen
        </Text>
      </View>
    </SafeAreaView>
  );
}
