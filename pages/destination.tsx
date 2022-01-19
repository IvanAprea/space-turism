import type { NextPage } from "next";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MainContainer from "../components/MainContainer/MainContainer";
import MainButton from "../components/MainButton/MainButton";
import SliderNumber from "../components/SliderNumber/SliderNumber";
import {CircleStar} from '../public/icons/CircleStar';
import { ROUTES } from "../components/constants/RoutePath";

const Destination: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<number>();
  const [currentSlider, setCurrentSlider] = useState<number>();

  return (
    <MainContainer>
      <NavigationBar
        options={ROUTES}
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
