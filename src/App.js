// import logo from './logo.svg';
import './App.css';

// import Student from './functional-component/Student';

//example of multiple components in single pagee
// import {Component1} from './functional-component/MultipleComponent';
// import {Component2} from './functional-component/MultipleComponent';
// import Hello from './Hello';
// import UserClass from './class-component/UserClass';
// import Jsx from './jsx/Jsx';
// import Events from './events/Events';
// import StudentClass from './class-component/StudentClass';
// import State from './state/State';
// import StateClass from './state/StateClass';
// import Props from './props/Props';
// import PropsClass from './props/PropsClass';
// import React,{useState} from 'react';   //for state
// import GetInputVal from './getValue/GetInputVal';
// import Toggle from './toggle/Toggle';
// import Form from './form/Form';
// import Profile from './conditional-rendering/Profile';
// import Validation from './form/Validation';
// import User from './props/User';
// import UserClass2 from './class-component/UserClass2';
// import User from './functional-component/User';
// import CDM from './lifeCycle/CDM';
// import CDU from './lifeCycle/CDU';
// import SCU from './lifeCycle/SCU';
// import CWU from './lifeCycle/CWU';
// import UseState from './hooks/UseState';
// import HookUseEffect from './hooks/HookUseEffect';
// import Style from './style/Style';
// import Bootstrap from './style/Bootstrap';
// import ListingWithMap from './listing-array/ListingWithMap';
// import NestedList from './listing-array/NestedList';
// import ReuseCompParent from './listing-array/ReuseCompParent';
// import FragmentParent from './fragment/FragmentParent';
// import ParentComp from './lifting-state-up/ParentComp';
// import User from './pure-component/User';
// import UseMemo from './hooks/UseMemo';
// import RefClass from './ref/RefClass';
// import UseRefHook from './ref/UseRefHook';
// import ForwardRefParent from './ref/ForwardRefParent';
// import HOC from './component/HOC';
import Home from './router/Home';
import About from './router/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
 
  // component within compoent
  // function Apple(){
  //   return(
  //     <div>Hello from Apple component</div>
  //   )
  // }
// const [data,setName] = useState(0)

//pass function as props
// function getData(){
//   alert('hello from App')
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
    {/* <Events/> */}
    {/* <StudentClass/> */}
    {/* <State/> */}
    {/* <StateClass/> */}
    {/* <Props name={data}/> */}
    {/* <button onClick={()=>setName(data+1)}>Click</button> */}
    {/* <PropsClass name="Sakil hossain"/> */}
 
    {/* Get Input Box Value */}
     {/* <GetInputVal/> */}

     {/* <Toggle/> */}
     {/* <Form/> */}
   
  {/* <Profile/> */}
  {/* <Validation/> */}

  {/* <User data={getData}/> */}
{/* <UserClass2/> */}
{/* <User/> */}
{/* <CDM/> */}
{/* <CDU/> */}
{/* <SCU/> */}
{/* <CWU/> */}
{/* <UseState/> */}
{/* <HookUseEffect/> */}
{/* <Style/> */}
{/* <Bootstrap/> */}
{/* <ListingWithMap/> */}
{/* <NestedList/> */}
{/* <ReuseCompParent/> */}
{/* <FragmentParent/> */}
{/* <ParentComp/> */}
{/* <User/> */}
{/* <UseMemo/> */}
{/* <RefClass/> */}
{/* <UseRefHook/> */}
{/* <ForwardRefParent/> */}
{/* <HOC/> */}
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
