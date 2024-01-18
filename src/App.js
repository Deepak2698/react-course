import logo from './logo.svg';
import ReactDOM from 'react-dom';

import './App.css';
// import Component1 from './Components/Component1';
// import Component2 from './Components/Component2';
// import Component3 from './Components/Component3';
// import Parent from './Components/Parent';
// import ParentFn from './Components/ParentFn';
// import TextState from './Components/TextState';
// import Lifecycle1 from './Components/Lifecycle1';
// import Event1 from './Components/Event1';
//import Form1 from './Components/Form1';
import Header from './MusicComponents/Header';
import Products from './MusicComponents/Products';


function App() {
  return (
    <div >
      <h1>Home</h1>
      <Header/>
    <Products/>
    </div>
  );
}

export default App;
