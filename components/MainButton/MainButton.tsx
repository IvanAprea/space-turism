import { Button } from '@chakra-ui/react'
import React from 'react'

interface IProps {
  children: string;
}
function MainButton(props: IProps) {
  return (
    <Button
      textStyle='mainButton'
      variant='mainButton'
      _hover={{boxShadow:'0 0 0 88px rgba(255, 255, 255, 0.1)'}}
      _focus={{}}
    >
      {props.children}
    </Button>
  )
}

export default MainButton;
