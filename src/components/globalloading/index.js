import React, { Component } from 'react';
import loading from '../../gif/loading.gif';
import './style.css';

class LoginForm extends Component {
  render() {
    const { isLoading } = this.props.globalLoading;
    let html = null;
    if (isLoading) {
      html = (
        <div className="global-loaging">
          <img src={loading} alt="loading" className="icon" />
        </div>
      );
    }
    return html;
  }
}

export default LoginForm;
