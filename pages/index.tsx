import { Flex, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MainContainer from "../components/MainContainer/MainContainer";

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<number>();
  const options = [
    { label: "HOME" },
    { label: "DESTINATION" },
    { label: "CREW" },
    { label: "TECHNOLOGY" },
  ];

  return (
    <MainContainer>
      <NavigationBar
        options={options}
        currentTab={currentTab}
        onChange={setCurrentTab}
      />
    </MainContainer>
  );
};

export default Home;
