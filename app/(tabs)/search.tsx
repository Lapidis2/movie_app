import { View,Image, FlatList } from 'react-native'
import React from 'react'
import useFetch from '@/services/useFetch'
import { getMovies } from '@/services/api'

import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'

const Search = () => {
   const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    getMovies({
      query: "",
    }),
  );
  return (
      <View className='flex-1 bg-primary'>
           <Image source={images.bg} className='w-full flex-1 absolute z-0' resizeMode='cover' />
      
<FlatList
data={movies}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=><MovieCard {...item} />}
numColumns={3}
className='px-5'
columnWrapperStyle={
  {
    justifyContent:'center',
    gap:10,
    marginTop:15
  }
}

contentContainerStyle={{paddingBottom:100, minHeight:'100%'}}
/>

         </View>
  )
}

export default Search