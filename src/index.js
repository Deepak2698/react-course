import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route,  BrowserRouter as Router, Routes , Link} from 'react-router-dom';
import './index.css';
import App from './App';
import Product from './Navigation/Product';
import Customer from './Navigation/Customer';
import Notfound from './Navigation/NotFound';
import TempComp from './Navigation/TempComp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> 
    <div>
    <ul>
      <button type="button" >
        <li>   <Link to="/"> Home </Link>   </li>
      </button>
      <button type="button">
        <li>   <Link to="/Customer"> Customer </Link>   </li>
      </button>
      <button type="button">
        <li>   <Link  to="/Product/">  Product </Link>   </li>
      </button>
    </ul>
      <Routes>
          <Route exact path="/" element={<App/>} />
          <Route path="/Customer/:id/:name" element={<Customer/>} />  
          {/*dynamic route placeholder ":id" replaced by value in url */}
          <Route path="/Product" element={<Product/>} />
          <Route path= "/Product/:id" element ={<TempComp/>} />       
          <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
</Router>
);

