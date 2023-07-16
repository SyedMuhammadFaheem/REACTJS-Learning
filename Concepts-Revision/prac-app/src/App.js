import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import HelloJS from './components/HelloJS';
import Hello from './components/Hello';
import GreetProp from './components/GreetProp';
import GreetPropClass from './components/GreetPropClass';


function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
      <HelloJS/>
      <GreetProp name='Ishaq Prop'/>
      <GreetPropClass name='Ishaq Prop Class'>
        Inside the tag as child
      </GreetPropClass>
    </div>
  );
}

export default App;
