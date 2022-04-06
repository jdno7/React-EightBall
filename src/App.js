
import './App.css';
import EightBall from './EightBall'
import statements from './statements';

function App() {
  return (
    <div className="App">
     <EightBall statements={statements}/>
    </div>
  );
}

export default App;
