import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: 'Bellefair',
    body: 'Barlow Condensed',
  },
  components: {
    Heading: {
      variants: {
        'h1': {
          fontSize: '150px',
          fontWeight: 'normal',
        },
        'h2': {
          fontSize: '100px',
          fontWeight: 'normal',
        },
        'h3': {
          fontSize: '56px',
          fontWeight: 'normal',
        },
        'h4': {
          fontSize: '32px',
          fontWeight: 'normal',
        },
        'h5': {
          fontFamily: 'Barlow Condensed',
          fontSize: '28px',
          fontWeight: 'normal',
          letterSpacing: '4.75px',
        },
      },
    },
  },
  textStyles: {
    sh1: {
      fontFamily: 'Bellefair',
      fontWeight: 'normal',
      fontSize: '28px',
    },
    sh2: {
      fontFamily: 'Barlow Condensed',
      fontWeight: 'normal',
      fontSize: '14px',
      letterSpacing: '2.35px',
    },
    nav: {
      fontFamily: 'Barlow Condensed',
      fontWeight: 'normal',
      fontSize: '16px',
      letterSpacing: '2.7px',
    },
  }
})

export default theme;
