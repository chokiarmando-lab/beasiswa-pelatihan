const API_URL = 'http://localhost:3000';

export interface LoginResponse {
  message: string;
  token: string;
  id: number;
  name: string;
  email: string;
  role: string;
}

export async function login(
  email: string,
  password: string,
): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Login gagal');
  }

  return data;
}

export interface RegisterResponse {
  message: string;
  id?: number;
  name?: string;
  email?: string;
  role?: string;
}


export async function register(
  name: string,
  email: string,
  password: string,
): Promise<RegisterResponse> {

  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });


  const data = await response.json();


  if (!response.ok) {
    throw new Error(data.message || "Register gagal");
  }


  return data;
}

