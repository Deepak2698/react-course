import React from 'react'
import { Link} from 'react-router-dom';

const  Product  = () =>{
       return (
         <div>
            <h1>Product</h1>
            <strong>select a Product</strong>
            <ul>
                <li> 
                <Link to ="/Product/Secret, Alchemist, SCOOP"> Books</Link>  {/* Child/Nested Route */}
                </li>
                <li>
                <Link to ="/Product/Addgel, Trimax, Cello"> Pen</Link>      {/* Child/Nested Route */}
                </li>
            </ul>
         </div>
        )
};

export default Product;