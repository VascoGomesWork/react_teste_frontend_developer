import React, { Component } from "react";

class Alert extends Component {
  render() {
    return (
      <div class="alert alert-success" role="alert">
        {this.props}
      </div>
    );
  }
}

export default Alert;
