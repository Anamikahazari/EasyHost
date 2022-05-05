import React,{useState} from 'react'
import SlickSlider from '../slickSlider/SlickSlider'
import {useLocation} from 'react-router-dom';

export default function AllOfUs(props) {

const location = useLocation();
console.log("insdie allofus location data",location);
const state = location.state;
const randomList = [];
let n = 0;
const [candidates,updateCandidates] = useState(['viral','Abhishek','Anamika','Ankur','Avinash','Ayaz','Chirag','Chintan','Fenil','Girish','Harshada','Hitesh','Jai','Janak','Jestin','Jasbir','Kathni','Mayur','Miloni','Priyanka','Rahul','Saumil','Shahid','Sheetal','Shyamrao','Smita','Sumit','Surendra','Swapnil','Swati','Vinit','Sonal']);
// Remove host name from list:

candidates.forEach((element, index) => {
  if(element == state.hostName){
    candidates.splice(index,1);
  }
});

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
  
    
    <div className='h-screen px-10'>
    <div className='text-white  pt-5 text-center'>
        <div className='font-dancing text-2xl lg:text-4xl bg-black text-yellow-300'>Hey {state.hostName} !! , Heres is all candidates</div>
        <div>Total members are {candidates.length}</div>
    </div>
    <SlickSlider candidates ={candidates} randomList ={randomList} updateCandidates={updateCandidates}/>
    </div>
                
  )
}
