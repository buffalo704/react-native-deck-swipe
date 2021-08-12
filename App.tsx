import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
// import Ball from "./src/Ball";
import Deck from "./src/Deck";

export default function App() {
  const DATA = [
    {
      id: 1,
      text: "Card #1",
      uri: "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/butterfly_16x9_0.jpg?itok=QbdCGLby",
    },
    {
      id: 2,
      text: "Card #2",
      uri: "https://cdn.britannica.com/w:1100/09/167709-131-36A6A6E8/butterfly-moth-blue-Lepidoptera-insect.jpg",
    },
    {
      id: 3,
      text: "Card #3",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepqEY_FywSTUBbkgKd33aVPf_ofTLnKr-M8pBxXuIv8QCQjQJVSU9I6z3K_EZkP5NlHA&usqp=CAU",
    },
    {
      id: 4,
      text: "Card #4",
      uri: "https://www.verywellmind.com/thmb/zXQRb_oIpQxFNTNuZQl4OE7P928=/1780x1335/smart/filters:no_upscale()/GettyImages-567150195-58bc87ad3df78c353c360c56.jpg",
    },
    {
      id: 5,
      text: "Card #5",
      uri: "https://cff2.earth.com/uploads/2021/06/11112039/shutterstock_15112215383-scaled.jpg",
    },
    {
      id: 6,
      text: "Card #6",
      uri: "https://australianbutterflies.com/ab-content/uploads/2018/08/red-cracker-blue-butterfly.jpg",
    },
    {
      id: 7,
      text: "Card #7",
      uri: "https://a-z-animals.com/media/2020/01/Butterfly-green.jpg",
    },
    {
      id: 8,
      text: "Card #8",
      uri: "https://www.dailyscandinavian.com/wp-content/uploads/2019/06/9999-f-i-butterflyguide.jpg",
    },
  ];

  const renderCard = (item: { id: number; text: string; uri: string }) => {
    return (
      <Card key={item.id}>
        <Card.Title>{item.text}</Card.Title>
        <Card.Image source={{ uri: `${item.uri}` }}>
          <Card.FeaturedTitle>{item.text} FeaturedTitle</Card.FeaturedTitle>
          <Card.FeaturedSubtitle>
            {item.text} FeaturedSubtitle
          </Card.FeaturedSubtitle>
        </Card.Image>
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further.
        </Text>
        <Button
          icon={<Icon name="code" color="white" size={20} />}
          buttonStyle={{
            backgroundColor: "#03A9F4",
          }}
          title="View Now!"
        />
      </Card>
    );
  };

  const renderNoMoreCards = () => {
    return (
      <Card>
        <Card.Title>All Done!</Card.Title>
        <Text style={{ marginBottom: 10 }}>There's no more content here</Text>
        <Button
          buttonStyle={{ backgroundColor: "#03A9F4" }}
          title="Get more!"
        />
      </Card>
    );
  };
  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
