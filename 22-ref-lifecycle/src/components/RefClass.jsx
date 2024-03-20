import React from "react";

class Refclass1 extends React.Component {
  handleFocus = () => {
    this.myInput.focus();
  };
  render() {
    return (
      // <React.Fragment></React.Fragment>
      <>
        <p>버튼클릭시 input창에 focus 처리(callback 사용)</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

class Refclass2 extends React.Component {
  myInput = React.createRef();
  handleFocus = () => {
    this.myInput.current.focus();
  };

  render() {
    return (
      <>
        <p>버튼클릭시 input창에 focus 처리(createRef()사용)</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export { Refclass1, Refclass2 };
