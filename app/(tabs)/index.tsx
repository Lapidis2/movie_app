import Search from "@/components/Search";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { View, Image, Text, ActivityIndicator, FlatList } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { getMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { GetTrendingMovies } from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";

const Index = () => {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: TrendingLoading,
    error: TrendignError,
  } = useFetch(() => GetTrendingMovies());

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    getMovies({
      query: "",
    })
  );

  // ✅ Loading screen
  if (moviesLoading || TrendingLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-primary">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  // ✅ Error screen
  if (moviesError || TrendignError) {
    return (
      <View className="flex-1 justify-center items-center bg-primary">
        <Text className="text-red-500">
          Error: {moviesError || TrendignError}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}

        ListHeaderComponent={
          <>
            <Image
              source={icons.logo}
              className="w-12 h-10 mt-20 mb-5 mx-auto"
            />

            <Search
              onPress={() => router.push("/search")}
              placeholder="Search movie....."
            />

            {trendingMovies && (
              <View className="mt-10">
                <Text className="text-white text-lg font-bold mt-5 mb-3">
                  Trending Movies
                </Text>

                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={trendingMovies}
                  renderItem={({ item, index }) => (
                    <TrendingCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.movie_id.toString()}
                  ItemSeparatorComponent={() => <View className="w-8" />}
                  className="mb-4 mt-3"
                />
              </View>
            )}

            <Text className="text-lg text-white mb-5 mt-5 font-bold">
              Latest Movies
            </Text>
          </>
        }

        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 15,
          marginBottom: 10,
        }}

        renderItem={({ item }) => <MovieCard {...item} />}
      />
    </View>
  );
};

export default Index;