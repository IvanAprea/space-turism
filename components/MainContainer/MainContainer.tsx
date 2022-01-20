import { Flex } from "@chakra-ui/react";
import React from "react";

interface IProps {
  backgroundImage: string;
  children: JSX.Element | JSX.Element[];
}

const MainContainer = (props: IProps) => {
  const { backgroundImage } = props;
  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      width="100%"
      minH="100vh"
    >
      {props.children}
    </Flex>
  );
};

export default MainContainer;
