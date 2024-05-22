import {
  View,
  Text,
  ImageSourcePropType,
  FlatList,
  useWindowDimensions,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors, globalStyles } from "../../../config/theme/theme";
import { Button } from "../../components/ui/Button";
import { router } from "expo-router";
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../assets/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../../assets/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../../assets/slide-3.png"),
  },
];
export const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    if (currentIndex !== currentSlideIndex && currentIndex > -1) {
      console.log("currentIndex", currentIndex);
      setCurrentSlideIndex(currentIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({ index });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <FlatList
        ref={flatListRef}
        data={items}
        pagingEnabled
        decelerationRate={"normal"}
        scrollEnabled={false}
        keyExtractor={(item, index) => item.title + index}
        horizontal
        renderItem={({ item }) => <SlideItem item={item} />}
        onScroll={onScroll}
      />
      {currentSlideIndex === items.length - 1 ? (
        <Button
          text="Finalizar"
          styles={{
            position: "absolute",
            bottom: 60,
            right: 30,
            width: 100,
          }}
          onPress={() => {
            router.back();
          }}
        />
      ) : (
        <Button
          text="Siguiente"
          styles={{
            position: "absolute",
            bottom: 60,
            right: 30,
            width: 100,
          }}
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        />
      )}
    </View>
  );
};

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        backgroundColor: "white",
        borderRadius: 5,
        width,
      }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />
      <Text
        style={[
          globalStyles.title,
          { color: colors.primary, alignSelf: "flex-start" },
        ]}
      >
        {title}
      </Text>
      <Text
        style={{
          color: colors.text,
          marginTop: 20,
          textAlign: "left",
        }}
      >
        {desc}
      </Text>
    </View>
  );
};
