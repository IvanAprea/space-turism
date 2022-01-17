import { Circle } from '@chakra-ui/react'
import React from 'react'

interface IProps {
  index: number;
  isActive: boolean;
  onChange: (value: number) => void;
}

const SliderButton = (props: IProps) => {
  const { isActive, onChange, index } = props;
  
  return (
    <Circle
      size='15px'
      bg={isActive ? 'white' : '#404040'}
      opacity='0.8'
      as='button'
      _hover={!isActive ? {bgColor: '#787878'} : {}}
      onClick={() => onChange(index)}
    />
  )
}

export default SliderButton;
