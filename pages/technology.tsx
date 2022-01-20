import type { NextPage } from "next";
import { useState } from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import MainHeader from "../components/MainHeader/MainHeader";

const Technology: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<number>();
  const [currentSlider, setCurrentSlider] = useState<number>();

  return (
    <MainContainer backgroundImage="url('/technology/background-technology-desktop.jpg')">
      <MainHeader currentTab={3} />
    </MainContainer>
  );
};

export default Technology;
