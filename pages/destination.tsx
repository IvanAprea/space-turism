import type { NextPage } from "next";
import { useState } from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import MainHeader from "../components/MainHeader/MainHeader";

const Destination: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<number>();
  const [currentSlider, setCurrentSlider] = useState<number>();

  return (
    <MainContainer backgroundImage="url('/destination/background-destination-desktop.jpg')">
      <MainHeader currentTab={1} />
    </MainContainer>
  );
};

export default Destination;
