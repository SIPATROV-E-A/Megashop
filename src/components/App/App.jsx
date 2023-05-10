
import './App.css';
import { Header } from '../Header/Header';
import { Futer } from '../Futer/Futer';
import { CardList } from '../CardList/CardList';

function App() {
  return (
    <>
      <Header></Header>
      <main className='content_container'>
        <div className='content_cards'>
          <CardList/>

        </div>
      </main>
      <Futer></Futer>
    </>
    
  );
}

export default App;
