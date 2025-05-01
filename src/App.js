import LeftBlock from './LeftBlock/LeftBlock';
import RightBlock from './RightBlock/RightBlock';
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
