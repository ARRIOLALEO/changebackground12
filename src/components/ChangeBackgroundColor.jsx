import {Component} from 'react'
class ChangeBackgroundColor extends Component{
    constructor(){
        super();
        this.state = {
            color:true,
        }
    }
    render(){
      document.body.style.background = this.state.color ? "blue" : "orange"
        return(
            <div>
                <h2>💘color💘</h2>
                <button onClick={()=> this.setState({color: !this.state.color})}>Change color</button>
            <h1>{this.state.color}</h1>
            </div>
        )
    }
}

export default ChangeBackgroundColor