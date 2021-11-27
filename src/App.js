import './App.css';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <Header></Header>
      </header>
    </div>
  );
}

export default App;
