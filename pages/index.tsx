import type { NextPage } from "next";
import MainContainer from "../components/MainContainer/MainContainer";
import MainHeader from "../components/MainHeader/MainHeader";

const Home: NextPage = () => {

  return (
    <MainContainer backgroundImage="url('/home/background-home-desktop.jpg')">
      <MainHeader currentTab={0} />
    </MainContainer>
  );
};

export default Home;
