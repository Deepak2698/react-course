import React from 'react';
import ChildFn from './ChildFn';

const  ParentFn  = () =>{
      return (
        <div>
             <ChildFn dataFromParent="Passing the data using props"/>
        </div>
     );
   };

export default ParentFn;