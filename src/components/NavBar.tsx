import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp'
import React from 'react'

const navbar = () => {
  return (
   <HStack>
    <Image src={logo} boxSize='60px'/>
    <Text>Nav Bar</Text>
   </HStack>
  )
}

export default navbar