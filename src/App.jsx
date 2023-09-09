
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Tream';
import Users from './Users';



function App() {
  function handleClick(){
    alert("button is clicked")
  }
  const handleClicktwo
 = ()=>{
  alert('button two is clicked')
 }  

 const addToFive = (num) =>{
  alert(num + 5);
 }


  return (
    <>
   <h3>React Core Concepts </h3>
   <Counter></Counter>
   <Friends></Friends>
  
   <Users></Users>
   <Team></Team>
   <button onClick={handleClick}>Click Me</button>
   <button onClick={handleClicktwo}>Click Me two</button>
   <button onClick={()=>{alert('third button is clicked')}}>Third</button>
  
  <button onClick={()=>addToFive(3)}>Four</button>
  
    </>
  )
}

export default App
