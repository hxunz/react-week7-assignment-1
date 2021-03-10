import React from 'react';

export default function LoginForm({
  email, password,
  onChange, onSubmit,
}) {
  function HandleChange(e) {
    const { target: { value, name } } = e;

    onChange({ value, name });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input
          type="email"
          name="email"
          id="input-email"
          value={email}
          placeholder="email"
          onChange={HandleChange}
        />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          name="password"
          id="input-password"
          value={password}
          placeholder="password"
          onChange={HandleChange}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}
