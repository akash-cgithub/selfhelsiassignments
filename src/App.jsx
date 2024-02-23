// import { useState } from "react"

// // const Display=({counter})=><div>{counter}</div>
  

// // const Button=({onClick,name})=> <button onClick={onClick}>{name} </button>
  


// // const App = () => {
// //   const [ counter, setCounter ] = useState(0)

// // //  setTimeout(()=>setCounter(counter+1),1000)

// //   console.log('rendering...', counter)
// // const increaseByOne=()=>{
// //   setCounter(counter+1);
// // }
// // const setToZero=()=>{
// //   setCounter(0);
// // }
// // const decreaseByOne=()=>{
// //   setCounter(counter-1)
// // }
// //   return (<>
// //    <Display counter={counter}/>
// //    <Button name="plus" onClick={increaseByOne}/>
// //    <Button name="zero" onClick={setToZero}/>
// //    <Button name="minus" onClick={decreaseByOne}/>

// //   </>

// //   )
// // }
// const App=()=>{
//   // const [clicks,setClicks]=useState({
//   //   left:0,
//   //   right:0
//   // })
//   // const handleLeft=()=>setClicks({...clicks,left:clicks.left+1})
//   // const handleRight=()=>setClicks({...clicks,right:clicks.right+1})
//   const [right,setRight]=useState(0)
//   const [left,setLeft]=useState(0)
//   const [allClicks,setAllClicks]=useState([])
//   const [total,setTotal]=useState(0)
//   const handleLeft=()=>{
//     // allClicks.push("L")
//    setAllClicks(allClicks.concat("L")) 
//    const updatedLeft=left+1
//     setLeft(updatedLeft)
    
//     setTotal(updatedLeft+right)
//   }
//   const handleRight=()=>{
//     // allClicks.push("R")
//    setAllClicks(allClicks.concat("R")) 
//    const updatedRight=right+1
//     setRight(updatedRight)
//     console.log(allClicks)
//     setTotal(left+updatedRight)
//   }
//   return (
//     <>  
//     {left}
//     <button onClick={handleLeft}>left</button>
//     <br/>
//     {right}
//     <button onClick={handleRight}>right</button>
//   {allClicks.join("")}
//   <br/>
//   {total}
//     </>
//   )
// }
// export default App
import { useState } from 'react'
const StaticLine=(props)=><tr><td>{props.text}</td><td>{props.value}</td></tr>


const Statistics = (props) => {
  if(props.all==0)return<div>no feedback given</div>
  return (

    <table>
      <tbody>
      <StaticLine text="good" value={props.good} />
      <StaticLine text="neutral" value={props.neutral} />
      <StaticLine text="bad" value={props.bad} />
      <StaticLine text="all" value={props.all} />
      <StaticLine text="average" value={props.avg} />
      <StaticLine text="positive" value={props.pos} />
  {/* good{props.good}<br/>
  neutral{props.neutral}<br/>
  bad{props.bad}<br/>
  all {props.all}<br/>
  average {props.avg}<br/>
  positive {props.pos} */}
  </tbody>
</table>
    )
}
const Button=(props)=><button onClick={props.onClick}>{props.text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll]=useState(0)
  const [avg,setAvg]=useState(0)
  const [pos,setPos]=useState(0)
 
 const handleGoodClick=()=>{
  const newVal=good+1
  setGood(newVal);
  const newAllVal=all+1
  setAll(newAllVal)
  setAvg((newVal+(bad*-1))/newAllVal)
  setPos(newVal/newAllVal*100)
 }
 const handleNeutralClick=()=>{
  const newVal=neutral+1
  setNeutral(newVal);
  const newAllVal=all+1
  setAll(newAllVal)
  setAvg((good+(bad*-1))/newAllVal)
  setPos(good/newAllVal*100)
 }
 const handleBadClick=()=>{
  const newVal=bad+1
  setBad(newVal);
  const newAllVal=all+1
  setAll(newAllVal)
  setAvg((good+(newVal*-1))/newAllVal)
  setPos(good/newAllVal*100)
 }
  const avgFeedback=()=>(good+(bad*-1))/all


  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
   
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} pos={pos}   />
    
    </div>
  )
}

export default App