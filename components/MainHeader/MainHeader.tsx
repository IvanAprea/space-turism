import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { CircleStar } from "../../public/icons/CircleStar";
import { ROUTES } from "../constants/RoutePath";
import NavigationBar from "../NavigationBar/NavigationBar";

interface IProps {
  currentTab?: number;
}

function MainHeader(props: IProps) {
  const { currentTab } = props;
  return (
    <Flex align="center" w="100%" justify="space-between" pt={9} pl="55px">
      <CircleStar />
      <Flex h="1px" backgroundColor="red" w="100%" ml="100px" zIndex="1" position='relative'/>
      <NavigationBar options={ROUTES} currentTab={currentTab} />
    </Flex>
  );
}

export default MainHeader;
