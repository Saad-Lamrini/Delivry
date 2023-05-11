import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categorie = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/*Ctegroie card */}
      <CategoryCard
        urlimage="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="testing"
      />
      <CategoryCard
        urlimage="https://images.pexels.com/photos/2291596/pexels-photo-2291596.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="testing"
      />
      <CategoryCard
        urlimage="https://images.pexels.com/photos/14855604/pexels-photo-14855604.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="testing"
      />
      <CategoryCard
        urlimage="https://images.pexels.com/photos/14855604/pexels-photo-14855604.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="testing"
      />
      <CategoryCard
        urlimage="https://images.pexels.com/photos/14855604/pexels-photo-14855604.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="testing"
      />
      <CategoryCard
        urlimage="https://images.pexels.com/photos/14855604/pexels-photo-14855604.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="testing"
      />
    </ScrollView>
  );
};

export default Categorie;
