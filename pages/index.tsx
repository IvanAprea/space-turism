import type { NextPage } from "next";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MainContainer from "../components/MainContainer/MainContainer";
import MainButton from "../components/MainButton/MainButton";

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
      <MainButton>EXPLORE</MainButton>
    </MainContainer>
  );
};

export default Home;
