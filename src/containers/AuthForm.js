import React, { Component } from 'react';

import { connect } from 'react-redux';

class AuthForm extends Component {
  render() {
    return <div>
      I'm AuthForm!
    </div>
  }
}

export default connect((state) => {
  return {
  }
}, {})(AuthForm);