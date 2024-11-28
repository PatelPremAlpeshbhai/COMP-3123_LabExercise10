// Action for logging in
export const login = (token) => ({
  type: "LOGIN_SUCCESS",
  payload: token,
});

// Action for logging out
export const logout = () => ({
  type: "LOGOUT",
});

// Action for incrementing the counter
export const increment = () => ({
  type: "INCREMENT",
});

// Action for decrementing the counter
export const decrement = () => ({
  type: "DECREMENT",
});
