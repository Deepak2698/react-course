import React,{ Component} from 'react';
class Header extends Component{
    constructor(){
        super()
        this.state={                    //state
            title:'React App',          //props
            userInput:'Plz. enter Product to search'  
        }
    }
    
    inputChange=(event)=>{ //if text box has value, store that in userInput prop else store string "Plz.enter Product to search"
        this.setState({userInput:event.target.value ? event.target.value : 'Plz.enter Product to search'})
    }
    render(){ 
        return(
            <div>
                <center>
                    <h1> Music Store</h1>
                    <center>
                        <input placeholder="Product to Search"
                        onChange={this.inputChange}/>  {/*  */}
                    </center>
                    <p>{this.state.userInput}</p>    {/* Displays data from the prop  */}
                </center>
                <hr/>
            </div>
        )
    }
}

export default Header;


/*
Bind() method used to call a function with the this value, this keyword refers to the same object which is currently selected . 
The need for bind usually occurs, when we use the this keyword in a method and we call that method from an event handler, 
then sometimes "this" context is not bound to the object that we expect which results in errors 
*/