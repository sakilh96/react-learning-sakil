// import logo from './logo.svg';
import './App.css';
// import Student from './functional-component/Student';

//example of multiple components in single pagee
// import {Component1} from './functional-component/MultipleComponent';
// import {Component2} from './functional-component/MultipleComponent';
// import Hello from './Hello';
// import UserClass from './class-component/UserClass';
// import Jsx from './jsx/Jsx';
import Events from './events/Events';
function App() {
  // component within compoent
  // function Apple(){
  //   return(
  //     <div>Hello from Apple component</div>
  //   )
  // }

  return (
    <div className="App">
     
       {/* <h1>Hello World</h1> */}
       
       {/* Functional component */}
       {/* <Student/> */}
      {/* example of multiple components in single pagee */}
       {/* <Component1/> */}
       {/* <Hello/> */}
      {/* <UserClass/> */}

    {/* <Apple/> */}
    {/* <Jsx/> */}
    <Events/>

    </div>
  );
}

export default App;
