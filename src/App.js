import './App.css';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import GTP from './components/GTP/gtp';
import OpenAI from './components/openAI/openai';
import CaseStudies from './components/caseStudies/caseStudies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <Header></Header>
        <GTP></GTP>
        <OpenAI></OpenAI>
        <CaseStudies></CaseStudies>
      </header>
    </div>
  );
}

export default App;
