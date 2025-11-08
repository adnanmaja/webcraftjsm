import api from "./api";

// Authentication service
export const authService = {
  // Login
  async login(email, password) {
    const response = await api.post("/login", { email, password });
    if (response.data.access_token) {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.data.user_id,
          email: response.data.email,
          name: response.data.name,
        })
      );
    }
    return response.data;
  },

  // Register
  async register(userData) {
    const response = await api.post("/register", userData);
    return response.data;
  },

  // Logout
  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
  },

  // Get current user
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if user is authenticated
  isAuthenticated() {
    return !!localStorage.getItem("access_token");
  },
};
