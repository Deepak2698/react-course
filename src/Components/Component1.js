import React from 'react';

var styles= {backgroundColor:'cyan'};

class  Component1 extends React.Component{
   render(){
     return (
       <div style={styles}>
            <h1>{2+4}</h1>
       </div>
     );
   }
};

export default Component1;