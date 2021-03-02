import logo from './logo.svg';
import Counter from './counter'
import InputSample from './InputSample'
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
      <Counter/>
      <InputSample/>
    </>
  );
}

export default App;
