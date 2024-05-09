import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [isNumberCheck,setNumber] = useState(false);
const [isCharCheck, setChar]    = useState(false);
let [Range,setRange]           = useState(4);
let [Password,setPassword]     = useState("");
let [CopyVar,setCopy] = useState("Copy");
let FindRange =  (event) => {
  setRange(Range = event.target.value)
}
let numberAttached = ()=>{
setNumber(!isNumberCheck);
}
let charAttached = ()=>{
  setChar(!isCharCheck);
  }
   //useRef Hook for connect or get content from that element 
   const textRef = useRef(null);
   const selectPassClip = () => {
    setCopy(CopyVar = "Copied");
    textRef.current?.select();
    window.navigator.clipboard.writeText(Password);
    
   }

 let passwordCreator= () =>
 {
  setCopy(CopyVar = "Copy");
   let pass = " ";
    let Words = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxwz";
    const number="0123456789";
    if(isCharCheck)   Words+="[]{}\|?/><@#$%^&*()!~`,"
     
    if(isNumberCheck) Words+="0123456789"

    // Random number
    for(let i = 0; i<Range; i++){
    let ind = Math.floor(Math.random()*Words.length+1);
    pass += Words.charAt(ind);
    console.log(Password);
    }
    setPassword(pass);
 }


 useEffect(()=>{passwordCreator()},[Range,isNumberCheck,isCharCheck])


  return (
  
    <div className=' bg-black w-screen  h-screen'>
      <div className=' flex flex-col justify-center items-center p-6 mx-auto bg-slate-500 rounded-lg h-50vh max-w-fit'>
        <p className='text-center text-2xl m-5'>Password Generator</p>
        <div> 
          <input 
          type='text' 
          value={Password} 
          readOnly 
          className='bg-white w-72 h-11 rounded-md text-red-400 p-4' ref={textRef}></input> 
        </div>
           <div>
           <button onClick={passwordCreator} className='bg-blue-900 p-2 m-3 w-28 h-10'>Refresh</button>
           <button onClick={selectPassClip} className='bg-blue-900 p-2 m-3 w-28 h-10'>{CopyVar}</button>
           </div>
          
          <p className='p-4 text-lg'>Select Range : {Range}</p>
          <input type='range' defaultValue={0} onChange={FindRange}></input>
          <label className='p-4 text-lg'>Use Number</label>
          <input type='checkbox' checked={isNumberCheck} onChange={numberAttached} className='w-8 h-7'></input>
          <label className='p-4 text-lg'>Use Special Charcater</label>
          <input type='checkbox' checked={isCharCheck} onChange={charAttached} className='w-8 h-7'></input>
        </div>
    </div>

    
  )
}

export default App
