import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';

export default function HowIsThere() {
  const [hostName,sethostName] = useState('');
  const navigate = useNavigate();

  const toAllOfUs=()=>{
    // window.open();
    navigate('/hey_there',{state:{hostName:hostName}});

  }
  const hostEntered = (e)=>{
    if(e.charCode == 13){
        console.log(window.location);
        toAllOfUs();
        // window.location = '/hey_there'
    }
     console.log(e);
  }
  console.log(hostName);
  return (
    <>
    <div className='wrapper p-40'>
        <div className='flex items-center justify-center flex-col '>      
              <label htmlFor="hostName" className='cursor-pointer text-5xl text-gray-300 font-bals'>Who is this ?</label>
              <input type="text" id="hostName"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600 mt-20' placeholder='Enter Host Name' onChange={(e)=>{sethostName(e.target.value)}} onKeyPress={(e)=>{hostEntered(e)}}></input>
              {/* <Link className='link bg-red border-white' target = '_blank' query={{hostName:hostName}} to={{pathname:'/hey_there',state:[{hostName:{hostName}},],query:{hostName:hostName}}}>AllOfUs</Link> */}
        </div>
    </div>
    </>
  )
}
