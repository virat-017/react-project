import React from 'react'
import { Box } from '@mui/material';

import HeroBanner from "../components/HeroBanner"
import Excercises from "../components/Exercises"
import SearchExercises from "../components/SearchExercises"

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Excercises/>
    </Box>
  )
}

export default Home