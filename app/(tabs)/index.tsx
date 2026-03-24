import Search from "@/components/Search";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { View, Image, ScrollView, Text, ActivityIndicator, FlatList } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { getMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { GetTrendingMovies } from "@/services/appwrite";
const Index = () => {
  const router = useRouter();
  const {
    data:trendingMovies ,
    loading: TrendingLoading,
    error: TrendignError,
  } = useFetch(() =>
    GetTrendingMovies(),
  );
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
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5  mx-auto" />

        {moviesLoading || TrendingLoading? (
          <ActivityIndicator
            size="large"
            color="#000"
            className="mt-10 self-center"
          />
        ) : moviesError||TrendignError ? (
          <Text className="text-red-500 text-center mt-10">
            Error: {moviesError||TrendignError}
          </Text>
        ) : (
          <View className="flex-1 mt-5"> 
            <Search
              onPress={() => router.push("/search")}
              placeholder="Search movie....."
            />


            {trendingMovies&&(
              <View className="mt-10">
              <Text className="text-white text-lg font-bold mt-5 nb-3">
                Trending Movies
              </Text>
              </View>
            )
            }
          </View>
        )}
        <>
        <Text className="text-lg text-white mb-10 mt-5 font-bold">Latest Movies</Text>
        <FlatList
        data={trendingMovies}
        renderItem={({item,index})=>(
          <Text className="text-white text-lg">
            {item.title}
          </Text>
        )}
        keyExtractor={(item)=>item.movie_id.toString()}
        >


        </FlatList>



        <FlatList
        data={movies}
        
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={
          {
            justifyContent: 'space-between',
            gap:15,
       
       marginBottom:10

          }
        }
        renderItem={({item})=>(
        <MovieCard
        {...item}
        />

        )
        
      
      }
        /> 
        </>
      </ScrollView>
    </View>
  );
};

export default Index;
