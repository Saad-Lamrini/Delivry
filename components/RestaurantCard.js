import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const RestaurantCard = (props) => {
  return (
    <TouchableOpacity className="bg-white shadow mr-3">
      <Image
        className="h-36 w-70 rounded-sm mx-4"
        source={{ uri: props.imgurl }}
      />
      <View className="px-3 pb-1">
        <Text className="font-bold pt-2 text-lg mx-4">{props.title}</Text>
      </View>
      <View className="flex-row items-center space-x-2 px-6">
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3334/3334338.png',
          }}
          className="h-7 w-7"
        />
        <Text className="text-xs text-gray-500 ">
          <Text className="text-green-600">{props.rating}</Text> <Text> </Text>.{' '}
          {props.genre}
        </Text>
      </View>
      <View className="px-6 pt-2 flex-row items-center space-x-1">
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/1865/1865269.png',
          }}
          className="h-7 w-7"
        />
        <Text className="text-xs text-gray-500 pt-2">
          Nearby . {props.adress}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
