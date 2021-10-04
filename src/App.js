// Import CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// Import component
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      {/* Display game */}
      <Game />
    </div>
  );
}

export default App;
