import React, { useState } from "react";
import {Link} from 'react-router-dom';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          이메일
          <input
            type="email"
            placeholder="user@test.com"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </label>
        <button disabled={!email || !password}>로그인</button>
      </form>
      <Link to ="/counter">Go Counter</Link>
      <Link to="/404">Go to 404</Link>
      <ul>
          <li>
              <Link to="/profiles/velopert">velopert profile</Link>
          </li>
          <li>
              <Link to="/profiles/gildong">gildong profile</Link>
          </li>
          <li>
              <Link to="/profiles/void">존재하지않는 profile</Link>
          </li>
      </ul>
    </>
  );
}

export default LoginForm;