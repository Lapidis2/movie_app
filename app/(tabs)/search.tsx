import { View, Image, FlatList, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "@/services/useFetch";
import { getMovies } from "@/services/api";
import Search from "@/components/Search";
import { images } from "@/constants/images";
import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";

const SearchMovie = () => {
  const [searchedQuery,setsearchedQuery]=useState('')
  const {
    data: movies,
    loading: moviesLoading,
    refetch:loadMovies,
    reset,
    error: moviesError,
  } = useFetch(() =>
    getMovies({
      query: searchedQuery,
    }),false);

useEffect(()=>{
 const timeoutId=setTimeout(async()=>{
  if(searchedQuery.trim()){
    await loadMovies()
  }
  else{
    reset()
  }
 },500
 )
 return ()=>clearTimeout(timeoutId)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchedQuery])


  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="w-full flex-1 absolute z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard {...item} />}
        numColumns={3}
        className="px-5"
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 10,
          marginTop: 15,
        }}
        contentContainerStyle={{ paddingBottom: 100, minHeight: "100%" }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <Search
              value={searchedQuery}
              onChangeText={(text:string)=>setsearchedQuery(text)}
               placeholder="Search movie..." />
              {moviesLoading && (
                <ActivityIndicator
                  size="large"
                  color="white"
                  className="my-5"
                />
              )}
              {moviesError && (
                <Text className="text-red-500 px-5 my-4 ">
                  Error:{moviesError}
                </Text>
              )}
              {!moviesLoading &&
                !moviesError &&
                searchedQuery.trim() &&
                movies?.length > 0 && (
                  <Text className="text-white font-bold">
                    Search for {""}
                    <Text className="text-accent">{searchedQuery}</Text>
                  </Text>
                )}
            </View>
          </>
        }
      />
    </View>
  );
};

export default SearchMovie;
