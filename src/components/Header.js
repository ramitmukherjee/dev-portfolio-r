import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ramit.mkj6@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ramitmukherjee",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ramit-mukherjee-b4b12b67/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={100}
    >
      <Box maxWidth="1280px">
        <HStack
          px={16}
          py={4}
          justifyContent="space-around"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={3}>
              {socials.length > 0 && socials.map(social => (
                <Link target="_blanlk" href={social.url}>
                  <FontAwesomeIcon color="white" size="2x" icon={social.icon} />
                </Link>
              ))}
              
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
