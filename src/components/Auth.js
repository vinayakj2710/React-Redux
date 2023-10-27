import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/index';

const Auth = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
    console.log(isAuthenticated);
  }

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
        </form>
        <button onClick={loginHandler}>Login</button>
      </section>
    </main>
  );
};

export default Auth;
