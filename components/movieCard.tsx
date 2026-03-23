import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({id,title,poster_path,vote_average,release_date}: Movie) => {
  return (
   <Link href={`/movie/${id}`} asChild>
<TouchableOpacity style={{ flex: 1 }} className="mb-4">
  
  <Image
    source={{
      uri: poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image",
    }}
    resizeMode="cover"
    style={{
      width: "100%",
      height: 160,
      borderRadius: 10,
    }}
  />

  <Text className="text-white text-xs mt-1" numberOfLines={1}>
    {title}
  </Text>
  <View className='flex-row items-center gap-2'>

   <Image source={icons.star}
   className='size-4'
   />
   <Text className='text-xs text-white font-bold'>
    {Math.round(vote_average/2)}
   </Text>

  </View>
  <View className='flex-row items-center justify-between'>
<Text className='text-light-300 text-xs '>
  {release_date}
</Text>
<Text className='text-light-300 text-xs'>
  Movie
</Text>
  </View>

</TouchableOpacity>



   </Link>
  )
}

export default MovieCard