import { Flex } from '@chakra-ui/react'
import React from 'react'

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const MainContainer = (props: IProps) => {
  return (
    <Flex
      direction='column'
      align='center'
      m="0 auto"
      backgroundImage="url('/home/background-home-desktop.jpg')"
      backgroundSize='cover'
      width='100%'
      minH="100vh"
    >
      {props.children}
    </Flex>
  )
}

export default MainContainer;
