import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import NavigationBarButton from "../components/NavigationBarButton/NavigationBarButton";

const Home: NextPage = () => {
  
  return (
    <Flex width="100vh" h='600px' alignItems="center" justifyContent="center" bgColor='spaceBlue.900'>
      <NavigationBar>
        <NavigationBarButton index={0} label={'ACTIVE'}/>
        <NavigationBarButton index={1} label={'HOVERED'}/>
        <NavigationBarButton index={2} label={'IDLE'}/>
      </NavigationBar>
    </Flex>
  );
};

export default Home;
