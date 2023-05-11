import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const CategoryCard = (props) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: props.urlimage }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
