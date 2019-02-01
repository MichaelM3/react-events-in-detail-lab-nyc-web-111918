import React, { Component } from "react";


export default class CoordinatesButton extends Component {

  clickCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }


  render() {

    return(
      <button
        onClick={this.clickCoordinates}>
        Coordinates Button
      </button>
    )

  }

}
