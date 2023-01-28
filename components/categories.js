import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      <CategoryCard 
      title="testing 1"
      />
      <CategoryCard 
      title="testing 2"
      />
      <CategoryCard 
      title="testing 3"
      />
    </ScrollView>
  )
}

export default Categories