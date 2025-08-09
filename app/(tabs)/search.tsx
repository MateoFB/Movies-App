import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: refetchMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await refetchMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Image className="w-full z-0 absolute mt-0 top-0" source={images.bg} />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        className="px-5"
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image
                source={icons.logo}
                className="w-40 h-10 mt-10 mb-5 self-center"
                resizeMode="contain"
              />
            </View>
            <View className="my-5">
              <SearchBar
                onPress={() => {}}
                placeHolder="Buscar"
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>
            {moviesLoading && (
              <ActivityIndicator size="large" color="#fff" className="mt-10" />
            )}
            {moviesError && (
              <Text className="text-white text-lg mt-10">
                Error: {moviesError}
              </Text>
            )}

            {!moviesLoading &&
              !moviesError &&
              !!searchQuery.trim() &&
              movies?.length > 0 && (
                <Text className="text-white font-bold text-lg mt-10 mb-3">
                  Buscar resultados para {""}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View className="flex-1 justify-center items-center mt-10">
              <Text className="text-accent text-lg text-center mt-10">
                {searchQuery.trim()
                  ? "No se encontraron películas."
                  : "Busca una película"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
