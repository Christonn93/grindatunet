// src/components/LoginForm.tsx
import React, { useState } from 'react';
import useAxiosInstance from '../../hooks/api/useAxios';
import { TextField, Button, Typography, Container } from '@mui/material';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await useAxiosInstance.post('/token', {
        username,
        password,
      });
      localStorage.setItem('authToken', response.data.token); // Save token
      window.location.href = '/home'; // Redirect after login
    } catch (err: any) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8px' }}>
        <Typography component="h1" variant="h5">Login</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          disabled={isLoading}
          style={{ marginTop: '1rem' }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        {error && (
          <Typography color="error" style={{ marginTop: '1rem' }}>
            {error}
          </Typography>
        )}
      </div>
    </Container>
  );
};

export default LoginForm;
