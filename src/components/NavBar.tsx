import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp'
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch';

const navbar = () => {
  return (
   <HStack justifyContent='space-between' padding='20px'>
    <Image src={logo} boxSize='60px'/>
    <ColorModeSwitch/>
   </HStack>
  )
}

export default navbar
