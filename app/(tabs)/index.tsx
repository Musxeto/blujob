import { Text,View,ScrollView,SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack,useRouter } from 'expo-router';
import { COLORS, icons, SIZES } from '@/constants';

export default function Home() {
  const router = useRouter()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen 
        options={{headerStyle: {
          backgroundColor: COLORS.lightWhite,
        }}}/>
    </View>
  );
}
