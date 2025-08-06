import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

type TabIconProps = {
  focused: boolean;
  icon: any;
  title: string; // Replace 'any' with the correct type if known (e.g., ImageSourcePropType)
};

const TabIcon: React.FC<TabIconProps> = ({ focused, icon, title }) => {
    return (
        focused ? (
         <ImageBackground
              source={images.highlight}
              className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
            >
              <Image
                source={icon}
                tintColor="#151312"
                className="size-5"
              />
              <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
            </ImageBackground>
    ) : (
        <View className="flex flex-row w-full flex-1 items-center justify-center size-full mt-4 rounded-full">
            <Image
                source={icon}
                className="size-5"
                tintColor="#D6C6ff"
            />
            <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
        </View>
    )
);
};
       

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width:'100%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center'},
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: "#0f0d23",
                borderRadius: 52,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 50,
                overflow: 'hidden',
                borderWidth:0,
                borderColor: "0f0d23"
            }
          }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
           <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => (
           <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarLabel: "Saved",
          tabBarIcon: ({ focused }) => (
           <TabIcon focused={focused} icon={icons.save} title="Saved"/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
           <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
