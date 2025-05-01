import LeftBlock from '../src/components/LeftBlock/LeftBlock';
import RightBlock from '../src/components/RightBlock';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <LeftBlock />
        <p>
          текст
        </p>
        <RightBlock />
      </header>
    </div>
  );
}

export default App;
