import logo from './logo.svg';
import Hello from './hello'
import Wrapper from './Wrapper'
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
    <Wrapper>
        <Hello style = {style}/>
    </Wrapper>
  );
}

export default App;
