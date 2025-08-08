import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const MovieCard = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
         <Image
        className="w-full h-52 rounded-lg"
        resizeMode="cover"
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://via.placeholder.com/150x225",
          }}
        /> 
        <Text className="text-white font-bold mt-2">{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
