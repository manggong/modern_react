import logo from './logo.svg';
import Hello from './hello'
import './App.css';

function App() {
  const name = 'manggong Kim'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '24',
    padding: '1rem'
  }
  return (
    <>
      <div className="App">
        <Hello style = {style}/>
      </div>
    </>
  );
}

export default App;
