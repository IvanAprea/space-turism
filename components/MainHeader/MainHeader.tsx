import React from "react";
import { ROUTES } from '../constants/RoutePath';
import NavigationBar from '../NavigationBar/NavigationBar';

interface IProps {
  currentTab?: number;
}

function MainHeader(props: IProps) {
  const { currentTab } = props;
  return <NavigationBar options={ROUTES} currentTab={currentTab} />;
}

export default MainHeader;
