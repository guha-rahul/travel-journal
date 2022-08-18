import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import Cards from "./components/Cards.js"
import data from "./data/data.js"
// <Navbar />

function App() {

  const cards = data.map(item => {
    return(
      <Cards 
        item = {item}    
      />
    )
  })

  return (
    <div> 
      <Navbar />
      {cards}  
    </div>
      );
}

export default App;
