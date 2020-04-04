import React, { Component } from 'react';

class Like extends Component {
    state = { 
        isEdite : true
     }
     LikeClass=()=>{
       return <i className="fa fa-heart" style={{cursor:"pointer"}} onClick={()=> this.toggleClass()} aria-hidden="true"></i>
     }
     disLikeClass=()=>{
       return <i className="fa fa-heart-o" style={{cursor:"pointer"}} onClick={()=> this.toggleClass()} aria-hidden="true"></i>
     }
     toggleClass=()=>{
         const isEdite=this.state.isEdite;
         this.setState({
             isEdite : !isEdite
         })
     }
    render() { 
        const isEdite=this.state.isEdite
        return ( 
            <div>
                { isEdite ?  this.disLikeClass() : this.LikeClass()}
            </div>
         );
    }
}
 
export default Like;