import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface SearchProps {
  placeHolder: string;
  onPress: () => void;
}

const SearchBar = ({placeHolder, onPress}: SearchProps) => {
  return (
    <View className='flex flex-row items-center bg-dark-200 rounded-full px-5 py-4 '>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff' />
      <TextInput 
        placeholder={placeHolder}
        placeholderTextColor='#a8b5db'
        value=''
        onPress={onPress}
      />
    </View>
  )
}

export default SearchBar