import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import "../globals.css";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  console.log(movies);

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Image className="w-full z-0 absolute mt-0 top-0" source={images.bg} />7
      <ScrollView
        className="flex-1 px-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <View className="flex-1 mt-5 ">
          <SearchBar
            onPress={() => router.push("/search")}
            placeHolder="Buscar"
          />
        </View>
      </ScrollView>
    </View>
  );
}
