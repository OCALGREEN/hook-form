import React, { Component } from  'react'; 

class PersonCard extends Component{
    // Declare constructor to overide default constructor so that we can initially set the state object
    constructor(props) {
        // gives us all the functionality  of the default constructor that comes with Component
        super(props); 
        this.state = {age: this.props.age}
    }

    increaseAge = () => {
        this.setState({age: this.state.age + 1}); 
    }
    render(){
        return (
            <div>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseAge}>
                    Birthday Button for {this.props.firstName} {this.props.lastName}
                </button>
            </div>
        ); 
    }
}

export default PersonCard; 