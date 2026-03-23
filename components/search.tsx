import { View,Image, TextInput} from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface searchProps {
  onPress?: () => void;
  placeholder: string;
  value:string;
  onChangeText:(text:string)=>void
}


const Search = ({ onPress, placeholder,value,onChangeText }:searchProps) => {
  return (
    <View className='flex-row items-center justify-center rounded-full bg-dark-200 px-5 py-4'> 
      <Image source={icons.search} className='size-5'tintColor="#ab8bff" resizeMode='contain' />
   <TextInput
   placeholder={placeholder}
    placeholderTextColor='#a8b5db'
    className='flex-1 ml-2 text-white'
    value={value}
    onPress={onPress}
    onChangeText={onChangeText}
   />
    </View>
  ) 
}

export default Search