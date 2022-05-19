import logo from './logo.svg';
import './App.css';
import List from "./components/list"
import Li from "./components/LI"


function App() {

  const a="Mobile Operating System"
  const  b="Mobile Manufactures"

  const c=["Android","Blackberry","iPhone","Window Phone"]
  
  const d=["Samsang","HTC","Micromax","Apple"]
  return (
   <div className="container">
 <List h1={a}/>

  {c.map(function(el){
    return (
   <Li list={el}/>)
    
   })}
 


 <List h1={b} />
 {d.map(function(el){
    return (
      <Li list={el}/>)
    
   })}

   </div>
  
  

  );
}

export default App;
