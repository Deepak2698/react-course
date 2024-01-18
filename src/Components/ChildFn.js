import React from 'react';

const  ChildFn  = (props) =>{
      return (
       <div>
            <h1>We are Learning : {props.dataFromParent}</h1>
       </div>
     );
   };

export default ChildFn;