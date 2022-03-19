import React,{useState} from 'react'
import SlickSlider from '../slickSlider/SlickSlider'
import {useLocation} from 'react-router-dom';

export default function AllOfUs(props) {

const location = useLocation();
console.log("insdie allofus location data",location);
const state = location.state;
const randomList = [];
let n = 0;
const [candidates,updateCandidates] = useState(['Ayaz','kathni','Surendra','viral','Shyam','Janak','jai','Mulraj','Miloni','Rahul','Shahid',
 'swapnil','siddharth','Fenil','Vinit','saumil','swati','sheetal','anamika','priyanka','harshada','chirag','Girish','Ankur','shyam','Avinash','Chintan','Abhishek','Sumit']);

//  updateCandidates(candidates.splice)
 const genrateRandom=()=>{
     n = Math.floor(Math.random()*(candidates.length));
     return n+1;
 }
 const nExist = (n)=>{
   if(randomList.indexOf(n) !== -1){
     return true;
   }
   return false;
 }
 const appendInList = (n)=>{
  if(!nExist(n)){
    randomList.push(n);
    // randomList.add(n);
  }
  else{
    appendInList(genrateRandom());
  }
 }
 
 candidates.forEach((item)=>{appendInList(genrateRandom())});

//  console.log("inside all of us hostname",hostName);
  return (
  
    
    <div className='h-screen'>
    <div className='text-white  pt-5 text-center'>
        <div className='font-dancing text-2xl lg:text-4xl bg-black'>Hey {state.hostName} !! , Heres is all candidates</div>
    </div>
    <SlickSlider candidates ={candidates} randomList ={randomList} updateCandidates={updateCandidates}/>
    </div>
                
  )
}
