import type { NextPage } from "next";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MainContainer from "../components/MainContainer/MainContainer";
import MainButton from "../components/MainButton/MainButton";
import Slider from "../components/Slider/Slider";
import SliderButton from "../components/SliderButton/SliderButton";

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<number>();
  const [currentSlider, setCurrentSlider] = useState<number>();
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
      <Slider amount={4} current={currentSlider} onChange={setCurrentSlider}/>
    </MainContainer>
  );
};

export default Home;
