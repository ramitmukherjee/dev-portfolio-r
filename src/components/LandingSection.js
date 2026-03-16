import React from "react";
import { Avatar, AvatarGroup,  Heading, VStack, Text, Button, Divider, Center } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ramit!";
const bio1 = "A fullstack developer specialised in";
const bio2 = "React and Spring Boot";
const resume = "Resume";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ffb"
    >
      <Avatar size="xl" src="/avatar.png"></Avatar>
      {/* <img src={"/avatar.png"} /> */}
      <Text>{greeting}</Text>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
      <Button pb={1} rounded="l3" variant="outline">{resume}</Button>
    </FullScreenSection>
  )
};

export default LandingSection;
