import {  Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const movieCard = ({id,title,poster_path,vote_average,release_date}: Movie) => {
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

</TouchableOpacity>



   </Link>
  )
}

export default movieCard