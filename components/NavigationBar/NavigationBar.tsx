import { HStack } from "@chakra-ui/react";
import React from "react";
import NavigationBarTab from "../NavigationBarTab/NavigationBarTab";

interface INavTab {
  label: string;
  path: string;
}
interface IProps {
  options: INavTab[];
  currentTab?: number;
}

export const NavigationBar = (props: IProps) => {
  const { options, currentTab } = props;

  const renderButtons = () => {
    return options?.map((item: INavTab, index: number) => {

      return (
        <NavigationBarTab
          isActive={index === currentTab}
          item={item}
          index={index}
          key={index}
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
      padding="0 120px"
    >
      {renderButtons()}
    </HStack>
  );
};

export default NavigationBar;
