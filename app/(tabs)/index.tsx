
import Search from '@/components/search'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import React from 'react'
import {View,Image, ScrollView, Text,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import useFetch from '@/services/useFetch'
import { getMovies } from '@/services/api'
const  Index=()=> {
 const router =useRouter();
const {data:movies,
  loading:moviesLoading,
  error:moviesError}=useFetch(()=>getMovies({
query:''

}))

    return (
      <View className='flex-1 bg-primary'>
        <Image source={images.bg} className='absolute w-full z-0' />
        <ScrollView className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10,minHeight:'100%' }}
        >
          
          <Image source={icons.logo} className='w-12 h-10 mt-20 mb-5  mx-auto'/> 

     {moviesLoading?(
      <ActivityIndicator
      size="large"
      color="#000"
      className='mt-10 self-center'
      />

     ):moviesError?(
<Text className='text-red-500 text-center mt-10'>Error: {moviesError}</Text>
     ):(     <View className='flex-1 mt-5'>
          <Search
          onPress={() => router.push('/search')}
          placeholder='Search movie.....'
          />
        </View>)}

         
   
        </ScrollView>
     
      </View>
    )
  }


export default Index
