import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';

const FeaturedRows = (props) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{props.title}</Text>
        <Image
          source={require('../assets/homescreenicons/arrow-right.png')}
          className="h-6 w-6 "
        />
      </View>
      <Text className="text-xs text-gray-500 px-4 ">{props.description} </Text>
      <ScrollView
        horizantal
        contentContaineStyle={{
          paddingHorizantal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/*Restaurants Card */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
