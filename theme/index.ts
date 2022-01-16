import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    spaceBlue: {
      100: "#D0D6F9",
      900: "#0B0D17",
    },
  },
  fonts: {
    heading: "Bellefair",
    body: "Barlow Condensed",
  },
  components: {
    Heading: {
      variants: {
        h1: {
          fontSize: "150px",
          fontWeight: "normal",
        },
        h2: {
          fontSize: "100px",
          fontWeight: "normal",
        },
        h3: {
          fontSize: "56px",
          fontWeight: "normal",
        },
        h4: {
          fontSize: "32px",
          fontWeight: "normal",
        },
        h5: {
          fontFamily: "Barlow Condensed",
          fontSize: "28px",
          fontWeight: "normal",
          letterSpacing: "4.75px",
        },
      },
    },
  },
  textStyles: {
    mainButton: {
      fontFamily: "Bellefair",
      fontWeight: "normal",
      letterSpacing: "2.35px",
      fontSize: '50px',
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
  },
});

export default theme;
