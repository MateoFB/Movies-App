import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface SearchProps {
  placeHolder: string;
  onPress: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({placeHolder, onPress, value, onChangeText}: SearchProps) => {
  return (
    <View className='flex flex-row items-center bg-dark-200 rounded-full px-5 py-4 '>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff' />
      <TextInput 
        placeholder={placeHolder}
        placeholderTextColor='#ab8bff'
        value={value}
        onPress={onPress}
        onChangeText={onChangeText}
        className='text-white flex-1 ml-3'
      />
    </View>
  )
}

export default SearchBar