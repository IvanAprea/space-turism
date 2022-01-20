import type { NextPage } from "next";
import { useState } from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import MainHeader from "../components/MainHeader/MainHeader";

const Crew: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<number>();
  const [currentSlider, setCurrentSlider] = useState<number>();

  return (
    <MainContainer backgroundImage="url('/crew/background-crew-desktop.jpg')">
      <MainHeader currentTab={2} />
    </MainContainer>
  );
};

export default Crew;
