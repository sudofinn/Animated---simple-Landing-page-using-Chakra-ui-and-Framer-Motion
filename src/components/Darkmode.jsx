import React from 'react'

import {IconButton} from "@chakra-ui/react"
import {useColorMode} from "@chakra-ui/react"
import {motion} from "framer-motion"
import {FaSun, FaMoon} from "react-icons/fa"

function Darkmode() {
    const MotionIconButton = motion(IconButton)

    const {colorMode, toggleColorMode} = useColorMode()





  return (
    <MotionIconButton float="right" marginRight="50px" position="relative" marginTop="-200" 
      icon={colorMode === "light" ? <FaSun /> : <FaMoon/>}
      isRound="true"
      size="lg"
      animate={{ rotate: 360 , y:[0,75,60]}}
      transition={{ duration: 1 }} 
      whileHover={{scale:1.5}}
      onClick={toggleColorMode}>

      </MotionIconButton>
  )
}

export default Darkmode