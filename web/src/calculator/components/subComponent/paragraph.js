import React, { Component } from 'react';

class Paragraph extends Component {

  render () {
    return (
      <div className="row">
        <div className="medium-6 columns">
          <p>{this.props.text}</p>
        </div>
      </div>
      )
  }
}

export default Paragraph;
