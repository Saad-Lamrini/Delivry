import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //headerTitle: 'testing',
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-3">
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View className="flex-row  items-center mx-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full mt-2"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <Image
              source={require('../assets/homescreenicons/down-arrow.png')}
              className="h-7 w-7 "
            />
          </Text>
        </View>
        <View className="pt-4">
          <Image
            source={require('../assets/homescreenicons/user.png')}
            className="h-7 w-7"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
