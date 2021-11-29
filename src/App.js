import './App.css';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import GTP from './components/GTP/gtp';
import OpenAI from './components/openAI/openai';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <Header></Header>
        <GTP></GTP>
        <OpenAI></OpenAI>
      </header>
    </div>
  );
}

export default App;
