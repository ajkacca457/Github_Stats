import React from 'react'
import Fchart from './Fchart'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Pie2D from "./Pie2d";
import Doughnut from './Doughnut';
import Bar2D from './Bar2d';

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

let popularRepo=gitrepos.reduce((total,item)=>{
  const {name,stargazers_count}=item;
  if(!name) return total;
  if(!total[name]) {
    total[name]={label:name,value:stargazers_count}
  } else {
    total[name]={...total[name],value:total[name].value+stargazers_count}
  }
  return total;
},{})

let mostForked=gitrepos.reduce((total,item)=>{
  const {name,forks}=item;
  if(!name) return total;
  if(!total[name]) {
    total[name]={label:name,value:forks}
  } else {
    total[name]={...total[name],value:total[name].value+forks}
  }
  return total;
},{})


languages=Object.values(languages).sort((a,b)=>{
  return b.value-a.value
}).slice(0,5);

stars= Object.values(stars).sort((a,b)=>{
  return b.value-a.value;
}).slice(0,5)

popularRepo= Object.values(popularRepo).sort((a,b)=>{
  return b.value-a.value;
}).slice(0,5)

mostForked=Object.values(mostForked).sort((a,b)=>{
  return b.value-a.value;
}).slice(0,5)

  return (
    <div>
      Repos
      <Pie2D data={languages}/>
      <Doughnut data={stars}/>
      <Fchart data={popularRepo}/>
      <Bar2D data={mostForked}/>
    </div>
  )
}

export default Repos