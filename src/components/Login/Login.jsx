import Card from '../UI/Card';

import classes from './Login.module.css';

const Login = props => {
  const signInHandler = event => {
    event.preventDefault();
  };

  return (
    <div className={classes.login}>
      <Card>
        <form className={classes.form}>
          <div className={classes.controls}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
          </div>
          <div className={classes.controls}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <div className={classes.actions}>
            <button onClick={signInHandler}>SIGN IN</button>
            <button onClick={props.onClose}>CLOSE</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
