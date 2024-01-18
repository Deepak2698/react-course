import React from 'react';

class  TextState extends React.Component{
    constructor(){
      super();
      this.state = {text: "Welcome participants"}    
    }

   changeText(){
      this.setState ( {text: "This is a React session"} );
    }

   render(){
     return (
       <div>
          <h1>{this.state.text}</h1>
          <button onClick={() => this.changeText()}>Next</button>
       </div>
     );
   }
};

export default TextState;