import React, { Component } from 'react';

import { connect } from 'react-redux';

import './AuthForm.scss';

class AuthForm extends Component {
  restorePassword = () => {

  }

  send = () => {

  }

  render() {
    const { errorMessage } = this.state;

    return <div className="auth-form-wrap">
      <form className="auth-form-content">
        <div className="auth-form-top">
          <h2>Вход</h2>
          <div className="auth-form-group">
            <label htmlFor="login">Эл. почта или телефон</label>
            <input type="text" name="login" id="login" />
          </div>
          <div className="auth-form-group">
            <label htmlFor="password">Пароль</label>
            <input type="password" name="password" id="password" />
            <button
              className="auth-form-restore-password"
              onClick={this.restorePassword}
            >Напомнить</button>
          </div>
        </div>

        <div className="auth-form-bottom">
          <button
            className="auth-form-send"
            onClick={this.send}
          >
            Войти на площадку
          </button>
          <p className="auth-form-error-message">{errorMessage}</p>
        </div>
      </form>
    </div>
  }
}

export default connect((state) => {
  return {
  }
}, {})(AuthForm);