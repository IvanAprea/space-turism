import { Flex, Text, Heading, VStack, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import MainButton from "../components/MainButton/MainButton";
import MainContainer from "../components/MainContainer/MainContainer";
import MainHeader from "../components/MainHeader/MainHeader";

const Home: NextPage = () => {
  const homeText = () => (
    <VStack maxW="445px" spacing='24px'>
        <Heading w='100%' variant="h5" textAlign='start'>SO, YOU WANT TO TRAVEL TO</Heading>
        <Heading variant="h1">SPACE</Heading>
        <Text textStyle="description">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text>
    </VStack>
  );

  return (
    <MainContainer backgroundImage="url('/home/background-home-desktop.jpg')">
      <MainHeader currentTab={0} />
      <Flex w='100%' p="250px 165px 0 165px" justifyContent='space-between'>
        {homeText()}
        <Flex w="50%" justify='end' pt='100px'>
          <MainButton>EXPLORE</MainButton>
        </Flex>
      </Flex>
    </MainContainer>
  );
};

export default Home;
