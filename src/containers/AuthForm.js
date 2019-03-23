import React, { Component } from 'react';

import { connect } from 'react-redux';

import './AuthForm.scss';

class AuthForm extends Component {
  state = {
    errorMessage: '',
    disabled: true,
    login: '',
    password: ''
  }

  restorePassword = () => {

  }

  send = () => {

  }

  onChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const {
      errorMessage, disabled, login, password
    } = this.state;

    return <div className="auth-form-wrap">
      <form className="auth-form-content">
        <div className="auth-form-top">
          <h2>Вход</h2>
          <div className="auth-form-group">
            <label htmlFor="login">Эл. почта или телефон</label>
            <input
              type="text"
              name="login"
              id="login"
              value={login}
              onChange={this.onChange}
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.onChange}
            />
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
            disabled={disabled}
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