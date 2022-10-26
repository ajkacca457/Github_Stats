import React from 'react'
import Fchart from './Fchart'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Pie2D from "./Pie2d";

const Repos = () => {
  const {gitrepos}= useContext(AppContext);
  let languages=gitrepos.reduce((total,item)=>{
    const {language}=item;
    if(!language) return total;
    if(!total[language]) {
      total[language]={label:language,value:0}
    } else {
      total[language]={...total[language],value:total[language].value+1};
    }
    return total;
  },{})

languages= Object.values(languages).sort((a,b)=>{
  return b.value-a.value
}).slice(0,5);
console.log(languages);

  return (
    <div>
      Repos
      <Fchart/>
      <Pie2D data={languages}/>
    </div>
  )
}

export default Repos