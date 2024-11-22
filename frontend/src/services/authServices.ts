import fetch from 'node-fetch';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://interactive-sustainability-dashboard-3.onrender.com/auth';

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login Error Details:', errorData);
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Network/Server Error:', error);
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  console.log('Sending registration request to API:', BASE_URL);
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Register Error Details:', errorData);
      throw new Error(errorData.message || 'Registration failed');
    }

    const data = await response.json();
    console.log('Registration success:', data);
    return data;
  } catch (error) {
    console.error('Network/Server Error during Registration:', error);
    throw error;
  }
};
