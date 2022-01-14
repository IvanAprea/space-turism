import { Flex, HStack } from "@chakra-ui/react";
import React from "react";
import NavigationBarButton from "../NavigationBarButton/NavigationBarButton";

interface INavButton {
  label: string;
}
interface IProps {
  options: INavButton[];
  currentTab?: number;
  onChange: (id: number) => void;
}

export const NavigationBar = (props: IProps) => {
  const { options, currentTab, onChange } = props;

  const renderButtons = () => {
    return options?.map((item: INavButton, index: number) => {
      const { label } = item;

      return (
        <NavigationBarButton
          onClick={onChange}
          isActive={index === currentTab}
          key={index}
          label={label}
          index={index}
        />
      );
    });
  };

  return (
    <HStack
      h="80px"
      bgColor="rgba(255, 255, 255, 0.05)"
      sx={{ backdropFilter: "blur(5px)" }}
      justify="center"
      spacing={12}
      padding='0 120px'
    >
      {renderButtons()}
    </HStack>
  );
};

export default NavigationBar;
