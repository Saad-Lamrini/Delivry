import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import RestaurantCard from './RestaurantCard';

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
        horizontal
        contentContaineStyle={{
          paddingHorizantal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 space-x-2"
      >
        {/*Restaurants Card */}
        <RestaurantCard
          id={123}
          imgurl={props.uriimg}
          title="yo ! pizza"
          rating={5}
          genre="Italian"
          adress="1253 main street"
          short_desc="this is a description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgurl={props.uriimg}
          title="yo ! pizza"
          rating={5}
          genre="Italian"
          adress="1253 main street"
          short_desc="this is a description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgurl={props.uriimg}
          title="yo ! pizza"
          rating={5}
          genre="Italian"
          adress="1253 main street"
          short_desc="this is a description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
