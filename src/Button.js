import React, { Component } from 'react'

class Button extends Component {
  constructor () {
    super();
    
  }
  
  
  render () {
    const { text } = this.props;

    return (
      <button className="our-button">
        <div style={{border: '2px solid ' , padding: '5px'}}>
          {text}
        </div>
      </button>
    )
  }
}

export default Button;
