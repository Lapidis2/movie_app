import React from "react";
import { Link } from "expo-router";
import { Image, Text, View, TouchableOpacity } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constants/images";
const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movie/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
       <View>
         <Image
          source={{ uri: poster_url }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-7 -left-3 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="text-6xl font-bold text-white">
                {index + 1}
              </Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>
       </View>
        <Text className="text-light-200 text-sm font-bold  mt-2" numberOfLines={2}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
