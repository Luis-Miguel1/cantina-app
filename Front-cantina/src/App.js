import logo from './logo.svg';
import './App.css';
import QuoteList  from './components/QuotesList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        QuotList
        </p>
       <QuoteList/>   
      </header>
    </div>
  );
}

export default App;
