const API_URL = "/api/users";

// Register user
const register = async (profileData) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    body: JSON.stringify(profileData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }

  if (response.status === 201) {
    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
};

// Login user
const login = async (user) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 401) {
    const error = await response.json();
    throw new Error(error.message);
  }
  if (response.status === 200) {
    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("list");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
