import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const  Home=()=> {
 
    return (
      <View className='flex justify-center items-center h-screen'>
        <Text className='text-dark-200 text-lg font-bold'> Welcome! </Text>
        <Link href="/movies">View Movies</Link>
      </View>
    )
  }


export default Home
