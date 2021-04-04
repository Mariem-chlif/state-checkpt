
import './App.css';
import React, { Component } from 'react'

let ProfilePhotoStyle = {
  border: "2px solid white",
  padding: "10px",
  borderRadius: "50px 20px",
  width: "200px",
  height: "200px"
}
class App extends Component {
  constructor(props){
    super (props) ;
    this.state= {
     Person:{fullName : "Mariem chlif" ,
      bio : " Highly motivated sales executive with extensive customer service and sales experience ,worked for 3 years at TUI Tunisia  ",
      imgSrc : <img src="/photo.png"  style={ProfilePhotoStyle}  alt="my_profile" /> ,
      profession :  "SALES EXECUTIVE "
    },
      show :false ,
      count: 0
    };
  }
  showName =() => {
      this.setState({show :!this.state.show})
  }

  componentDidMount() {
    this.myInterval = setInterval (()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }, 5000)
  }
  componentWillUnmount() {
    clearInterval(this.myInterval)
  }



  render() {
    const count = this.state.count
    return (
      <div className="profil" >
      { this.state.show ? (<div> {this.state.Person.imgSrc} <br/>
        <h1> {this.state.Person.fullName} </h1>   <br/>
       <p>  {this.state.Person.profession}  </p> <br/>
       <p> {this.state.Person.bio} </p> </div>):null  }  

        <button onClick= {this.showName} > {this.state.show}Show profile </button>

        <h1>Current count : {count} </h1>
      
      </div>
    )
  }
}

export default App;