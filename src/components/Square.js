import React from "react";

export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  setValue(value) {
    this.setState({
      value
    });
  }

  render() {
    const { value } = this.state;
    return (
      <button className="square" onClick={() => this.setValue("X")}>
        {value}
      </button>
    );
  }
}
