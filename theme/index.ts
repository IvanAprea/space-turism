import { extendTheme } from "@chakra-ui/react";
import buttonVariants from "./buttonTheme";
import headingVariants from "./headingTheme";

const theme = extendTheme({
  colors: {
    spaceBlue: {
      100: "#D0D6F9",
      900: "#0B0D17",
    },
  },
  fonts: {
    heading: "Bellefair",
  },
  components: {
    Heading: {
      variants: headingVariants,
    },
    Button: {
      variants: buttonVariants,
    },
  },
  textStyles: {
    mainButton: {
      fontFamily: "Bellefair",
      letterSpacing: "2.35px",
    },
    sh1: {
      fontFamily: "Bellefair",
      fontWeight: "normal",
      fontSize: "28px",
    },
    sh2: {
      fontFamily: "Barlow Condensed",
      fontWeight: "normal",
      fontSize: "14px",
      letterSpacing: "2.35px",
    },
    nav: {
      fontFamily: "Barlow Condensed",
      fontWeight: "normal",
      fontSize: "16px",
      letterSpacing: "2.7px",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
    },
    sliderNumber: {
      fontFamily: "Bellefair",
      fontWeight: "normal",
      fontSize: "32px",
    },
    description: {
      fontFamily: "Barlow",
      lineHeight: "32px",
      color: "spaceBlue.100",
    },
  },
});

export default theme;
