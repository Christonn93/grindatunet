import React, { useState } from 'react';
import { useRegisterUser } from '../../hooks/query/useRegister'
import { TextField, Button, Typography } from '@mui/material';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isError, error, isSuccess } = useRegisterUser();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Register new user
      </Button>
      {isSuccess && <Typography color="success">Registration successful!</Typography>}
      {isError && <Typography color="error">{error?.message}</Typography>}
    </form>
  );
};

export default RegisterForm;
