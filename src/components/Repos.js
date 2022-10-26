import React from 'react'
import Fchart from './Fchart'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Pie2D from "./Pie2d";
import Doughnut from './Doughnut';

const Repos = () => {
const {gitrepos}= useContext(AppContext);
let languages= gitrepos.reduce((total,item)=>{
  const {language}=item;
  if(!language) return total;
  if(!total[language]) {
    total[language]= {label:language,value:0}
  }else {
    total[language]={...total[language],value:total[language].value+1}
  }  
  return total;
},{})

let stars=gitrepos.reduce((total,item)=>{
  const {language,stargazers_count}=item;
  if(!language) return total;
  if(!total[language]) {
    total[language]={label:language,value:stargazers_count}
  } else {
    total[language]={...total[language],value:total[language].value+stargazers_count}
  }
  return total;
},{})

languages=Object.values(languages).sort((a,b)=>{
  return b.value-a.value
}).slice(0,5);

stars= Object.values(stars).sort((a,b)=>{
  return b.value-a.value;
}).slice(0,5)

  return (
    <div>
      Repos
      <Fchart/>
      <Pie2D data={languages}/>
      <Doughnut data={stars}/>
    </div>
  )
}

export default Repos