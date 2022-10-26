import React from 'react'
import Fchart from './Fchart'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Pie2D from "./Pie2d";

const Repos = () => {
  const {gitrepos}= useContext(AppContext);

  console.log(gitrepos);

  return (
    <div>
      Repos
      <Fchart/>
      <Pie2D/>
    </div>
  )
}

export default Repos