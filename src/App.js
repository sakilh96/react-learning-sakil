import logo from './logo.svg';
import './App.css';
import Student from './functional-component/Student';

//example of multiple components in single pagee
import {Component1} from './functional-component/MultipleComponent';
import {Component2} from './functional-component/MultipleComponent';

function App() {
  return (
    <div className="App">
       {/* <h1>Hello World</h1> */}
       
       {/* Functional component */}
       <Student/>
      {/* example of multiple components in single pagee */}
       <Component1/>
       <Component2/>
    </div>
  );
}

export default App;
