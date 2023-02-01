import './App.css';
import Greet from "./Componants/Greet.js"
import Welcome from './Componants/Welcome';
import Hello from './Componants/Hello';
import Message from './Componants/Message';
// import Counter from './Componants/Counter';
import FunctionClick from './Componants/FunctionClick';
import ClassClick from './Componants/ClassClick';
import EventBind from './Componants/EventBind';
import ParentComponent from './Componants/ParentComponent';
import UserGreeting from './Componants/UserGreeting';
import Lists from './Componants/Lists';
import StyleSheet from './Componants/StyleSheet';
import Form from './Componants/Forms/Form';
import RegistrationForm from './Componants/Forms/RegistrationForm';
import LiffeCycleA from './Componants/LiffeCycleA';
import FragmentDemo from './Componants/Fragments/FragmentDemo';
import Tables from './Componants/Fragments/Tables';
import pureComponents from './Componants/PureComponets/pureComponents';
import ClickCounter from './Componants/RenderProps/ClickCounter';
import HoverCounter from './Componants/RenderProps/HoverCounter';
import Counter from './Componants/RenderProps/Counter';
import User from './Componants/RenderProps/User';
import ComponentC from './Componants/Context/ComponentC';
import { UserProvider } from './Componants/Context/ComponentContext';
function App() {
  return (
    <div className="App-header">
      <Greet></Greet>
      {/* <Message></Message> */}
      {/* <Counter value="0"></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <Lists></Lists> */}
      {/* <StyleSheet primary='true'></StyleSheet> */}
      {/* <ClassClick></ClassClick> */}

     {/* <Welcome name='Sangeeta'></Welcome> */}
      {/* <Hello name="Pranav" age="19"></Hello> */}
    {/* <Hello name="Sameer" age="25"></Hello> */}
    {/* <Form></Form> */}
    {/* <LiffeCycleA></LiffeCycleA> */}
    <FragmentDemo></FragmentDemo>
    {/* <pureComponents></pureComponents> */}
    <Tables></Tables>
    <Counter render={(count,incrCount)=>(<HoverCounter count={count} increment={incrCount}/>)}/>
    <Counter render={(count,incrCount)=>(<ClickCounter count={count} increment={incrCount}/>)}/>
    
    <User name={(isLogin)=>isLogin?"Pranav":"Guest"}></User>
    <UserProvider value="Pranav Malpani">
    <ComponentC></ComponentC>
    </UserProvider>
    
    </div>
  );
}

export default App;
