  
import React from 'react';

class DelayedButton extends React.Component {
  handleClick = event => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}

export default DelayedButton;
// 

// import React from 'react'

// class DelayedButton extends React.Component{
    
    
    
    
//     render () {
//         return(
//             <div>
//                 <button onClick={(e) =>{
//                     window.setTimeout(() => 
//                     this.props.onDelayedClick(e), this.props.delay)
//                 }}
//                 ></button>
//             </div>
//         )
//     }
// }

// export default DelayedButton