import { Component } from "react";
class Message extends Component {
    render(){
        return <button className="buton2"
        onClick={()=>console.log('object')}>Button2</button>
    }
}
export default Message