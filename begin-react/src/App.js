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
        <Hello/>
      </div>
      <div style = {style}>
        {name}
      </div>
    </>
  );
}

export default App;
