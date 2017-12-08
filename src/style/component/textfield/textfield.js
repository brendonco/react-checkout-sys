import PropTypes from "prop-types";
import React from "react";

class Textfield extends React.Component {
  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    const { props } = this;
    const { className, ...rest } = props;

    const Component = "input";

    return (
      <Component
        {...rest}
        ref={input => {
          this.textInput = input;
        }}
        className="textfield"
      />
    );
  }
}

Textfield.propTypes = {
  className: PropTypes.string,
  boxed: PropTypes.bool,
  error: PropTypes.any,
};

export default Textfield;