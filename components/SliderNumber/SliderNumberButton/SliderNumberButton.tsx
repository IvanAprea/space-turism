import { Circle } from '@chakra-ui/react'
import React from 'react'

interface IProps {
  index: number;
  isActive: boolean;
  onChange: (value: number) => void;
}

const SliderNumberButton = (props: IProps) => {
  const { isActive, onChange, index } = props;
  
  return (
    <Circle
      color={isActive ? 'spaceBlue.900' : 'white'}
      textStyle='sliderNumber'
      size='80px'
      bgColor={isActive ? 'white' : ''}
      border={isActive ? '2px solid white' : '1px solid #787878'}
      as='button'
      _hover={{borderColor: 'white'}}
      onClick={() => onChange(index)}
    >
      {index}
    </Circle>
  )
}

export default SliderNumberButton;
