import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  changeMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let remaining = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange = {this.changeMessage} type="text" name="message" id="message" value = {this.state.message} />
        <p>Characters remaining: {remaining} </p>
      </div>
    );
  }
}

export default TwitterMessage;
