
import './App.css'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import {useState} from 'react'
function App() {

  //js code 
  const [principle,setPriciple]= useState(0)
  const [rate,setRate]= useState(0)
  const [year, setYear] =useState(0)
  const [isPrinciple,setIsPrinciple] =useState(true)
  const [isRate,setIsRate] =useState(true)
  const [isYear,setIsYear] =useState(true)
  const [isInterest,setInterest] =useState(0)

  const Validate =(e)=>{
    const {name , value} = e.target
    console.log(name);
    console.log(value);
    //reg exp = /^[0-9]*$/
    //match() - check the pttern matches the value and rturns array if the value matches otherwise returns null

    // !! - to convert into boolean

    /* console.log(value.match(/^[0-9]*$/));
 */
    if(!!value.match(/^[0-9]*$/)){
         if(name === `principle`){
          setPriciple(value)
          setIsPrinciple(true)
         }
         else if(name ===`rate`){
          setRate(value)
          setIsRate(true)
         }
         else {
          setYear(value)
          setIsYear(true)
         }
    }else{

      if (name ===`principle`){
        setPriciple(value)
        setIsPrinciple(false)

      }else if(name ===`rate`){
        setRate(value)
        setIsRate(false)

      }
      else{
        setYear(value)
        setIsYear(false)
      }

    }







  }
   const handleReset =()=>{
    setPriciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
   }

   const handleCalculate =(e)=>{
    e.preventDefault()
    setInterest((principle*rate*year)/100)
   }

  
  return (
    <>
  <div style={{height:'100%' }} className='bg-dark d-flex justify-content-center align-items-center'>
      <div className='bg-light p-5 rounded' style={{width:'500px' }}>
        <h2>Simple Interest App</h2>
        <p>Calculate your simple interest</p>
        <div style={{height:'150px'}} className ='bg-warning rounded mt-5  d-flex justify-content-center align-items-center flex-column'>
          <h1>₹ {isInterest} </h1>
          <p>Total Simple Interest</p>

        </div>

        <form  onSubmit={handleCalculate}> 
          <div className='mb-3 mt-5'>

          <TextField id="outlined-basic" name='principle' label="₹ Principle amount" variant="outlined" className='w-100' onChange={(e)=>Validate(e)}   value={principle || "" }   />

          { !isPrinciple &&
          <p className='text-danger'>invalid input</p> }
          </div>

          <div className="mb-3">

          <TextField id="outlined-basic" name='rate' label="Rate of interest (p.a)%" variant="outlined" className='w-100'  onChange={(e)=>Validate(e)}    value={rate || "" } />

         { !isRate &&
          <p className='text-danger'>invalid input</p> }
          </div>

          <div className="mb-3">


          <TextField id="outlined-basic" name='year' label="Year (Yr)" variant="outlined" className='w-100'  onChange={(e)=>Validate(e)}    value={year || "" }/>
          
          { !isYear &&
          <p className='text-danger'>invalid input</p> }
          </div>







          <div className="mb-6 mt-4  d-flex justify-content-between">
          <Button className='px-5' type='submit' variant="contained" color='success' style={{height:'50px',width:'100px'}} disabled={isPrinciple && isRate && isYear? false:true} >Calculate</Button>

          <Button onClick={handleReset} variant="outlined" style={{height:'50px',width:'100px'}}  >Reset</Button>
          </div>
      
        </form>
       

      </div>

      

    </div>
    
     
    </>
  )
}

export default App
