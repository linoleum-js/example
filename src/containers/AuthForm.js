import React, { Component } from 'react';

import { connect } from 'react-redux';

import { authorizeAction, restorePassrwordAction } from '../actions/actions';

import './AuthForm.scss';

const getErrorMessage = ({ error, restoreError, noLogin }) => {
  if (error) {
    return 'Неправильный логин или пароль';
  }
  if (restoreError) {
    return 'Пользователя с такой почтой или телефоном не существует';
  }
  if (noLogin) {
    return 'Введите эл. почту или телефон';
  }
  return '';
};

class AuthForm extends Component {
  state = {
    login: '',
    password: '',
    noLogin: false
  }

  restorePassword = () => {
    const { login, password } = this.state;
    if (!login) {
      this.setState({ noLogin: true });
      return;
    }
    this.setState({ noLogin: false });
  }

  send = () => {
    const { login, password } = this.state;
    const { authorizeAction } = this.props;
    this.setState({ noLogin: false });
    authorizeAction({ login, password });
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
      login, password, noLogin
    } = this.state;
    const {
      loading, error, restoreError
    } = this.props;

    const errorMessage = getErrorMessage({ error, restoreError, noLogin });

    return <div className="auth-form-wrap">
      <form className="auth-form-content">
        <div className="auth-form-top">
          <h2>Вход</h2>
          <div className="auth-form-group">
            <label
              htmlFor="login"
              className="auth-form-label"
            >Эл. почта или телефон</label>
            <input
              className="auth-form-input"
              type="text"
              name="login"
              id="login"
              value={login}
              onChange={this.onChange}
            />
          </div>
          <div className="auth-form-group">
            <label
              htmlFor="password"
              className="auth-form-label"
            >Пароль</label>
            <input
              className="auth-form-input"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.onChange}
            />
            <button
              className="auth-form-button auth-form-restore-password"
              onClick={this.restorePassword}
              type="button"
            >Напомнить</button>
          </div>
        </div>

        <div className="auth-form-bottom">
          <button
            className="auth-form-button auth-form-send-button"
            onClick={this.send}
            disabled={!login || !password}
            type="button"
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
    error: state.user.error,
    restoreError: state.user.restoreError,
    loading: state.user.loading
  }
}, {
  authorizeAction
})(AuthForm);