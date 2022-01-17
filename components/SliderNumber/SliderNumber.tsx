import { VStack } from "@chakra-ui/react";
import React from "react";
import SliderNumberButton from "./SliderNumberButton/SliderNumberButton";

interface IProps {
  amount: number;
  current?: number;
  onChange: (value: number) => void;
}

const Slider = (props: IProps) => {
  const { amount, current, onChange } = props;

  const renderSliderButtons = () => {
    let buttons = [];
    for (let i=0; i < amount; i++){
      buttons.push(<SliderNumberButton
        key={i}
        isActive={i === current}
        onChange={onChange}
        index={i}
      />);
    };
    return buttons;
  };

  return <VStack spacing={8}>{renderSliderButtons()}</VStack>;
};

export default Slider;
