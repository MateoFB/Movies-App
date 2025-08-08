import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import "../globals.css";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  console.log(movies);

  let content;
  if (moviesLoading) {
    content = (
      <ActivityIndicator
        size="large"
        color="#fff"
        className="mt-10 justify-self-center"
      />
    );
  } else if (moviesError) {
    content = (
      <Text className="text-white text-lg mt-10">Error: {moviesError}</Text>
    );
  } else {
    content = (
      <View className="flex-1 mt-5 ">
        <SearchBar
          onPress={() => router.push("/search")}
          placeHolder="Buscar"
        />
        <Text className="text-white font-bold text-lg mt-10 mb-3">
          Películas Populares
        </Text>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: "flex-start", gap:20, paddingBottom: 10, paddingRight: 5 }}
          className="mt-2 pb-32"
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View className="">
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                className="w-32 h-48 rounded-lg"
              />
              <Text className="text-white font-semibold mt-2">
                {item.title}
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={
            <Text className="text-white text-lg text-center mt-10">
              No se encontraron películas.
            </Text>
          }
        />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Image className="w-full z-0 absolute mt-0 top-0" source={images.bg} />7
      <ScrollView
        className="flex-1 px-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {content}
      </ScrollView>
    </View>
  );
}
