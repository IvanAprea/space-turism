import { HStack } from "@chakra-ui/react";
import React from "react";
import SliderButton from "../SliderButton/SliderButton";

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
      buttons.push(<SliderButton
        key={i}
        isActive={i === current}
        onChange={onChange}
        index={i}
      />);
    };
    return buttons;
  };

  return <HStack spacing={6}>{renderSliderButtons()}</HStack>;
};

export default Slider;
