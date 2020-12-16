import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';

function Login(props: Props) {
  return (
    <Layout title={props.title}>
      <hr className="mt-3 mb-3 " />
      <h1 style={{ color: '#fff', textAlign: 'center' }}>Admin panel</h1>
      <hr className="mb-3 mt-3" />

      <form method="POST" action="/admin/signin">
        <div className="input-field col s6">
          <input
            id="Login"
            type="text"
            className="validate"
            name="login"
            required
            style={{ color: '#fff' }}
          />
          <label className="active" htmlFor="Login">
            Login
          </label>
        </div>

        <div className="input-field col s6">
          <input
            id="Password"
            type="password"
            className="validate"
            name="password"
            required
            style={{ color: '#fff' }}
          />
          <label className="active" htmlFor="Password">
            Password
          </label>
        </div>

        <button type="submit" className="waves-effect waves-light btn">
          Sign In
        </button>
      </form>
      {props.err.length ? (
        <script
          dangerouslySetInnerHTML={{
            __html: ` M.toast({html: '${props.err}', classes: 'error' })`,
          }}
        ></script>
      ) : null}
    </Layout>
  );
}

Login.defaultProps = {
  err: '',
};

export default Login;
