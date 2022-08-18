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
      <section className='card-list'>
        {cards}        
      </section>   
    </div>
      );
}

export default App;
