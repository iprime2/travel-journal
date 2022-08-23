import './App.css';
import Navbar from './components/navbar'
import TravelCards from './components/travelcards'
import data from './data'

function App() {
  const journalCards = data.map(items => {
    return(
      <TravelCards
        keys = {items.id}
        {...items}
      />  
    )
  })
  return (
    <div className='App'>
      <Navbar />
      <section className='card-lists'>
        {journalCards}
      </section>
    </div>
    
  );
}

export default App;
