import './App.css';
import Header from "./My compnent/Header";
import {Todos} from "./My compnent/Todos";
import {Footer} from './My compnent/Footer';

 
function App() {
  let Todos = [
    {
       Sno:1,
       title: "Early Morning Exercise",
       desc: "Go to the gym and push yourself"
  },

  {
    Sno:2,
    title: "Take the boring online classes",
    desc: "Comlete your attendence and Focus"
},

{
  Sno:3,
  title: "Start coding and compete your task",
  desc: "YO need a more skill to improve yourself "
},
]
  return (
    <>
      <Header title = "My Todos List" searchBar = {false}/>
      <Todos Todos = {Todos}/> 
      <Footer/>
    </>
  );
}

export default App;
