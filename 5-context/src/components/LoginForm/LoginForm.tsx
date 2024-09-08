import type { ReactElement } from 'react';

import { useState } from 'react';

import { Input } from '../Input';

type LoginFormValues = {
  username: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (formValues: LoginFormValues) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps): ReactElement => {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    username: '',
    password: ''
  });

  return (
    <form
      className="border border-black border-solid flex flex-col gap-4 p-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formValues);
      }}
    >
      <Input
        label="Username"
        name="username"
        type="text"
        value={formValues.username}
        onChange={(value) =>
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            username: value
          }))
        }
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formValues.password}
        onChange={(value) =>
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            password: value
          }))
        }
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
