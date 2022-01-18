import type { NextPage } from "next";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MainContainer from "../components/MainContainer/MainContainer";
import MainButton from "../components/MainButton/MainButton";
import SliderNumber from "../components/SliderNumber/SliderNumber";
import {CircleStar} from '../public/icons/CircleStar';

const Destination: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<number>();
  const [currentSlider, setCurrentSlider] = useState<number>();
  const options = [
    { label: "HOME", path: '/' },
    { label: "DESTINATION", path: '/destination' },
    { label: "CREW", path: '/crew' },
    { label: "TECHNOLOGY", path: '/technology' },
  ];

  return (
    <MainContainer>
      <NavigationBar
        options={options}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <MainButton>EXPLORE</MainButton>
      {/* <Slider amount={4} current={currentSlider} onChange={setCurrentSlider} /> */}
      {/* <SliderNumber
        amount={4}
        current={currentSlider}
        onChange={setCurrentSlider}
      /> */}
        <CircleStar />
    </MainContainer>
  );
};

export default Destination;
