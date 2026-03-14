import React from "react";
import { Avatar, AvatarGroup,  Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ramit!";
const bio1 = "A fullstack developer specialised in";
const bio2 = "React and Spring Boot";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <Avatar size="xl" src="/avatar.png"></Avatar>
      {/* <img src={"/avatar.png"} /> */}
      <Text>{greeting}</Text>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </FullScreenSection>
  )
};

export default LandingSection;
