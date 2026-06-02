import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassLifecycle from './Components/ClassLifecycle';
import ConditionalRendering from './Components/ConditionalRendering';

import PropsDemo from './Components/PropsDemo';
import PropsChildren from './Components/PropsChildren';

import Bootstrap from './Components/Bootstrap';
import ClassJsonServerAPI from './Components/ClassJsonServerAPI';
import SpreadSyntax from './Components/SpreadSyntax';
import UserCard from './Components/Destructuring';
import Hooks from './Components/Hooks';
import ReactHooks from './Components/HooksExample';

import ReactFragments from './Components/ReactFragments';
import Events from './Components/EventHandling';
import ApiSearch from './Components/FilterSearch';

import PersonList from './Components/AxiosDemo';
import AwaitAsync from './Components/AxiosAsyncAwait';
import AxiosuseAxios from './Components/useAxiosDemo';
import ToggleHook from './Components/useToggle';
import ReactstrapDemo from './Components/ReactStrapDemo';

export function App() {
  return (
    <div>
      <App1 />
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {App};

function App1()
{
  return (
    <div>
      <ReactstrapDemo />
      {/* <UserCard name="John Doe" age={30} email="john.doe@example.com" /> */}
      {/* <Bootstrap /> */}
      {/* <ClassJsonServerAPI/> */}
      {/* <SpreadSyntax /> */}
      {/* <FunctionalComponent />
      <ClassComponent /> 
      <ClassLifecycle />
      <ConditionalRendering />*/}
      {/* <PropsDemo name="John Doe" age={30} /> */}
      {/* <PropsChildren/> */}
    </div>
  );
}

