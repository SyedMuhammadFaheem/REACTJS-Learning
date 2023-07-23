import logo from './logo.svg';
import './App.css';
import Greet from './components/FunctionalComponents/Greet';
import Welcome from './components/ClassComponents/Welcome';
import HelloJS from './components/JSX-vs-JS/HelloJS';
import Hello from './components/JSX-vs-JS/Hello';
import GreetProp from './components/Props/GreetProp';
import GreetPropClass from './components/Props/GreetPropClass';
import Message from './components/ClassState/Message';
import Counter from './components/ClassUseState/Counter';
import FunctionClick from './components/EventHandeling/FunctionClick';
import ClassClick from './components/EventHandeling/ClassClick';
import EventBind from './components/EventBinding/EventBind';
import ParentComponent from './components/MethodsProps/ParentComponent';
import UserGreeting from './components/ConditionalRendering/UserGreeting';


function App() {

  return (
    <div className="App">
      <UserGreeting/>
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/>
      <FunctionClick/> */}
      {/* <Message/>
      <Counter/> */}
      {/* <Greet/>
      <Welcome/>
      <Hello/>
      <HelloJS/>
      <GreetProp name='Ishaq Prop'/>
      <GreetPropClass name='Ishaq Prop Class'>
        Inside the tag as child
      </GreetPropClass> */}
    </div>
  );
}

export default App;
